/**
 * @typedef {object} Resume
 * @property {string} $schema
 * @property {awards[]} [awards]
 * @property {basics} basics
 * @property {education[]} education
 * @property {skills[]} [skills]
 * @property {work[]} work
 */

/**
 * @typedef {object} awards
 * @property {string} awarder
 * @property {string} date
 * @property {string} summary
 * @property {string} title
 */

/**
 * @typedef {object} basics
 * @property {string} email
 * @property {string} label
 * @property {location} location
 * @property {string} name
 * @property {string} phone
 * @property {profiles[]} [profiles]
 * @property {string} [url]
 */

/**
 * @typedef {object} location
 * @property {string} city
 * @property {string} region
 */

/**
 * @typedef {object} profiles
 * @property {string} network
 * @property {string} url
 * @property {string} username
 */

/**
 * @typedef {object} education
 * @property {string} area
 * @property {string} institution
 * @property {string} studyType
 */

/**
 * @typedef {object} skills
 * @property {string} name
 */

/**
 * @typedef {object} work
 * @property {string} [description] Description of company
 * @property {string} [endDate]
 * @property {string[]} highlights List of tasks/highlights at company
 * @property {string} location Company location (city/state)
 * @property {string} name Company Name
 * @property {string} position Position Title
 * @property {string} startDate
 * @property {string} [summary] Summary of responsibilities
 */

/**
 * @typedef {object} Project
 * @property {string[]} technologies
 * @property {string} name
 * @property {string} slug
 * @property {string} color
 * @property {string} textColor
 * @property {string} description
 * @property {string} imageLink
 * @property {string} projectLink
 * @property {string} [repoLink]
 * @property {boolean} [needsRehosting]
 */
