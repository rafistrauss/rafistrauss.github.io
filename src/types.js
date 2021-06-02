/**
 * @typedef {object} Resume
 * @property {string} $schema
 * @property {Awards[]} awards
 * @property {Basics} basics
 * @property {Education[]} education
 * @property {Work[]} work
 */

/**
 * @typedef {object} Awards
 * @property {string} awarder
 * @property {string} date
 * @property {string} summary
 * @property {string} title
 */

/**
 * @typedef {object} Basics
 * @property {string} email
 * @property {string} label Job Description
 * @property {UserLocation} location
 * @property {string} name
 * @property {string} phone
 * @property {Profiles[]} profiles
 * @property {string} url
 */

/**
 * @typedef {object} UserLocation
 * @property {string} city
 * @property {string} region
 */

/**
 * @typedef {object} Profiles
 * @property {string} network
 * @property {string} url
 * @property {string} username
 */

/**
 * @typedef {object} Education
 * @property {string} area
 * @property {string} institution
 * @property {string} studyType
 */

/**
 * @typedef {object} Work
 * @property {string} description Description of company
 * @property {string} [endDate]
 * @property {string[]} highlights List of tasks/highlights at company
 * @property {string} location Company location (city/state)
 * @property {string} name Company Name
 * @property {string} position Position Title
 * @property {string} startDate
 * @property {string} summary Summary of responsibilities
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
