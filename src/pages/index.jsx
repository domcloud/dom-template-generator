import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Checkbox, Divider, Flex, FormControl, FormLabel, Grid, HStack, Input, Select, Stack, Text, Textarea, useRadio, useRadioGroup, Wrap, WrapItem } from "@chakra-ui/react"
import { SiAFrame, SiGhost, SiGo, SiHtml5, SiNodeDotJs, SiPhp, SiPython, SiRuby, SiRust, SiWordpress } from 'react-icons/si'
import Options from "../components/forms"


const cmsOptions = [
  ['wordpress', SiWordpress, 'WordPress'],
  ['ghost', SiGhost, 'Ghost'],
  ['flarum', SiGhost, 'Flarum'],
];

const usageOptions = [
  ['cms', SiHtml5, 'Fresh CMS'],
  ['boot', SiPhp, 'Empty framework'],
  ['clone', SiNodeDotJs, 'From Git repo'],
];



function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function RadioButtonGroup({ options, value, onChange }) {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    value,
    onChange,
  })

  return (
    <Wrap {...getRootProps()}>
      {options.map(({ value, icon, label }) => (
        <WrapItem key={value}>
          <RadioCard {...getRadioProps({ value: value })}>
            <Flex align="center">
              {React.createElement(icon, { size: 20 })}
              <Text ms={2} fontSize={14}>
                {label}
              </Text>
            </Flex>
          </RadioCard>
        </WrapItem>
      )
      )}
    </Wrap>
  )
}

const TraverseForm = ({ form, value, onChange }) => {
  const identifier = React.useRef(Math.random() + "");
  const handleChange = (v) => {
    const selected = form.options?.find((x => x.value === v));
    value.value = v;
    value.children = selected?.forms?.map((x) => ({ value: x.defaultValue || '' })) || [];
    onChange({ ...value });
  }
  switch (form.type) {
    case 'radio':
      const selected = form.options.find((x => x.value === value.value));
      return <><FormControl mb={2}>
        <Grid templateColumns="1fr 2fr">
          <FormLabel display="flex" mb={0} alignItems="center">{form.label}</FormLabel>
          <RadioButtonGroup options={form.options} value={value.value} onChange={handleChange} /></Grid>
      </FormControl>
        {
          selected && selected.forms && selected.forms.map((x, i) => <div key={i}>
            <TraverseForm form={x} value={value.children[i] || {}} onChange={(v) => {
              value.children[i] = v;
              onChange({ ...value });
            }} />
          </div>)
        }
      </>;
    case 'select':
      const selected2 = form.options.find((x => x.value === value.value));
      return <><FormControl mb={2}>
        <Grid templateColumns="1fr 2fr">
          <FormLabel display="flex" mb={0} alignItems="center">{form.label}</FormLabel>
          <Select size="sm" value={value.value} onChange={(e) => handleChange(e.target.value)} >
            {form.options.map(x => <option key={x.value}>{x.label}</option>)}
          </Select></Grid>
      </FormControl>
        {
          selected2 && selected2.forms && selected2.forms.map((x, i) => <div key={i}>
            <TraverseForm form={x} value={value.children[i] || {}} onChange={(v) => {
              value.children[i] = v;
              onChange({ ...value });
            }} />
          </div>)
        }
      </>
    case 'text':
      return <><FormControl mb={2}>
        <Grid templateColumns="1fr 2fr">
          <FormLabel display="flex" mb={0} alignItems="center">{form.label}</FormLabel>
          <Input size="sm" list={identifier.current} value={value.value} placeholder={form.placeholder} onChange={(e) => handleChange(e.target.value)} />
        </Grid>
        {
          form.options && <datalist id={identifier.current}>
            {form.options.map(x => <option key={x.value} value={x.value}>{x.label}</option>)}
          </datalist>
        }
      </FormControl>
      </>
    case 'textarea':
      return <><FormControl mb={2}>
        <Grid templateColumns="1fr 2fr">
          <FormLabel display="flex" mb={0} alignItems="center">{form.label}</FormLabel>
          <Textarea data-gramm_editor="false" fontFamily="monospace" rows={5} size="sm" value={value.value} placeholder={form.placeholder} onChange={(e) => handleChange(e.target.value)} />
        </Grid>
      </FormControl>
      </>
    case 'checkbox':
      return <><FormControl mb={2}>
        <Grid templateColumns="1fr 2fr">
          <FormLabel display="flex" mb={0} alignItems="center">{form.label}</FormLabel>
          <Checkbox size="sm" list={identifier.current} checked={value.value} onChange={(e) => handleChange(e.target.checked)} />
        </Grid>
      </FormControl>
      </>
    default:
      return <></>;
  }
}

const IndexPage = () => {
  const [comps, setComps] = React.useState(() => Options.map(x => ({ })))
  return <Layout>
    <Seo title="Home" />
    {
      Options.map((x, i) => <>
        <TraverseForm form={x} key={i} value={comps[i]} onChange={(v) => {
          comps[i] = v;
          setComps([...comps]);
        }} />
        <Divider my={4}/>
      </>)
    }
  </Layout >
}

export default IndexPage
