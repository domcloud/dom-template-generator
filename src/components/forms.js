import React from 'react';
import {
    SiCakephp,
    SiCodeigniter,
    SiDjango,
    SiFlask,
    SiGhost,
    SiGit,
    SiGnubash,
    SiHtml5,
    SiJupyter,
    SiLaravel,
    SiMariadb,
    SiNextDotJs,
    SiNodeDotJs,
    SiNuxtDotJs,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiRails,
    SiRuby,
    SiStrapi,
    SiWordpress,
} from "react-icons/si";
import {
    FaCommentAlt,
    FaCross,
    FaDownload,
    FaFile,
    FaFileSignature,
    FaGrinStars,
    FaRegStar,
    FaRocketchat,
    FaServer,
    FaStar,
    FaStarAndCrescent,
    FaWindows
} from 'react-icons/fa'

const rootPublicHtml = {
    type: 'text',
    label: 'Root directory',
    placeholder: 'Default to public_html'
}

const rootPublic = {
    type: 'text',
    label: 'Static root directory',
    defaultValue: 'public_html/public',
}

const appPublic = (defaultValue) => ({
    type: 'text',
    label: 'Startup file (in parent root)',
    placeholder: 'default is ' + defaultValue
})

const nodePackagerOption = {
    type: 'select',
    label: 'Select package manager',
    options: [{
        value: 'none',
        label: 'None',
    }, {
        value: 'npm',
        label: 'NPM',
    }, {
        value: 'yarn',
        label: 'Yarn',
    }]
}

const dbOption = {
    type: 'radio',
    label: 'Select database instance',
    options: [{
        value: 'none',
        icon: FaFile,
        label: 'None',
    }, {
        value: 'npm',
        icon: SiMariadb,
        label: 'MariaDB',
    }, {
        value: 'yarn',
        icon: SiPostgresql,
        label: 'PostgreSQL',
    }]
}
const frameworkOptions = {
    type: 'radio',
    label: 'Select framework starter',
    options: [{
        value: 'codeigniter',
        icon: SiCodeigniter,
        label: 'CodeIgniter',
    }, {
        value: 'laravel',
        icon: SiLaravel,
        label: 'Laravel',
    }, {
        value: 'cakephp',
        icon: SiCakephp,
        label: 'CakePHP',
    }, {
        value: 'express',
        icon: (props) => React.createElement('img', {
            style: {
                display: 'block',
                marginBottom: 0
            },
            width: "20px",
            height: "20px",
            src: "https://simpleicons.org/icons/express.svg",
            alt: "",
        }),
        label: 'Express',
    }, {
        value: 'nextjs',
        icon: SiNextDotJs,
        label: 'Next.JS',
    }, {
        value: 'nuxtjs',
        icon: SiNuxtDotJs,
        label: 'Nuxt.JS',
    }, {
        value: 'django',
        icon: SiDjango,
        label: 'Django',
    }, {
        value: 'flask',
        icon: SiFlask,
        label: 'Flask',
    }, {
        value: 'rails',
        icon: SiRails,
        label: 'Rails',
    }]
}

const softwareOptions = {
    type: 'radio',
    label: 'Select server language',
    options: [{
        value: 'static',
        icon: SiHtml5,
        label: 'None',
        forms: [{
            type: 'select',
            label: 'Handle 404',
            options: [{
                value: '',
                label: 'Use Default',
            }, {
                value: '404',
                label: 'With 404.html',
            }, {
                value: '200',
                label: 'With 200.html (SPA)',
            }]
        }],
        transform: (x) => x,
    }, {
        value: 'php',
        icon: SiPhp,
        label: 'PHP',
        forms: [{
            type: 'select',
            label: 'Select version (PHP-FPM)',
            options: [{
                value: 'default',
                label: 'Use Default',
            }, {
                value: '8.0',
                label: '8.0.x',
            }, {
                value: '7.4',
                label: '7.4.x',
            }, {
                value: '5.6',
                label: '5.6.x',
            }]
        }, rootPublicHtml, {
            type: 'checkbox',
            label: 'Direct all requests to index.php?'
        }, dbOption],
        transform: (x) => x,
    }, {
        value: 'nodejs',
        icon: SiNodeDotJs,
        label: 'Node.JS',
        forms: [{
            type: 'text',
            label: 'Select version (NVM)',
            placeholder: 'Use Default',
            options: [{
                value: '12',
                label: 'Maintenance LTS 12.x',
            }, {
                value: '14',
                label: 'Active LTS 14.x',
            }, {
                value: '16',
                label: 'Current 16.x',
            }]
        }, nodePackagerOption, rootPublic, appPublic('app.js'), dbOption],
        transform: (x) => x,
    }, {
        value: 'python',
        icon: SiPython,
        label: 'Python',
        forms: [{
            type: 'text',
            label: 'Select version (Pipenv)',
            placeholder: 'Use Default',
        }, rootPublic, appPublic('passenger-wsgi.py'), dbOption],
        transform: (x) => x,
    }, {
        value: 'ruby',
        icon: SiRuby,
        label: 'Ruby',
        forms: [{
            type: 'text',
            label: 'Select version (RVM)',
            placeholder: 'Use Default',
        }, rootPublic, appPublic('config.ru'), dbOption],
        transform: (x) => x,
    }, {
        value: 'gls',
        icon: FaServer,
        label: 'Other',
        forms: [{
            type: 'text',
            label: 'Startup Command',
            placeholder: 'ex: "node app.js --port $PORT" (here $PORT is the port to bind)',
        }, rootPublic, dbOption],
        transform: (x) => x,
    }]
}

const cmsOptions = {
    type: 'radio',
    label: 'What Software you want to create?',
    options: [{
        value: 'wordpress',
        icon: SiWordpress,
        label: 'WordPress',
        forms: [

        ],
        transform: (x) => x,
    }, {
        value: 'ghost',
        icon: SiGhost,
        label: 'Ghost',
        forms: [

        ],
        transform: (x) => x,
    }, {
        value: 'flarum',
        icon: FaCommentAlt,
        label: 'Flarum',
        forms: [

        ],
        transform: (x) => x,
    }, {
        value: 'rocketchat',
        icon: FaRocketchat,
        label: 'Rocket.Chat',
        forms: [

        ],
        transform: (x) => x,
    }, {
        value: 'jupyter',
        icon: SiJupyter,
        label: 'Jupyter',
        forms: [

        ],
        transform: (x) => x,
    }, {
        value: 'strapi',
        icon: SiStrapi,
        label: 'Strapi',
        forms: [

        ],
        transform: (x) => x,
    }]
};

const usageOptions = {
    type: 'radio',
    label: 'What to be uploaded?',
    options: [{
        value: 'cms',
        icon: FaRegStar,
        label: 'Fresh CMS',
        forms: [
            cmsOptions
        ],
        transform: (x) => x,
    }, {
        value: 'boot',
        icon: FaFileSignature,
        label: 'Empty Framework',
        forms: [
            frameworkOptions,
            {
                type: 'checkbox',
                label: 'Initialize Git?'
            }
        ],
        transform: (x) => x,
    }, {
        value: 'clone',
        icon: SiGit,
        label: 'Git Repo',
        forms: [{
                type: 'text',
                label: 'Clone URL'
            }, {
                type: 'textarea',
                label: 'GitHub RSA Private Key',
                placeholder: 'Optional. Only needed for accessing private repo or push code'
            },
            softwareOptions
        ],
        transform: (x) => x,
    }, {
        value: 'unzip',
        icon: FaDownload,
        label: 'Unzip',
        forms: [{
                type: 'text',
                label: 'Zip URL'
            },
            softwareOptions
        ],
        transform: (x) => x,
    }, {
        value: 'bash',
        icon: SiGnubash,
        label: 'Execute Shell',
        forms: [{
                type: 'textarea',
                label: 'Bash Script'
            },
            softwareOptions
        ],
        transform: (x) => x,
    }],
}

const Options = [
    usageOptions,
    {
        type: 'textarea',
        label: 'Environment Variables'
    },
    {
        type: 'select',
        label: 'HTTPS Mode',
        options: [{
            value: 'enforce',
            label: 'Always Enforce',
        }, {
            value: 'on',
            label: 'Enable but don\'t enforce',
        }, {
            value: 'enforce',
            label: 'Disable (not recommended)',
        }],
    }
];

export default Options