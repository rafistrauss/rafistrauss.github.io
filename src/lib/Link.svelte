<script>
import { dev } from "$app/environment";
export let link, title;
/**
   * Get links that work both on dev and prod (since prod doesn't have complex routing
  as its just an S3 bucket)
   * @param {string} url Relative url with no extension
   * @param {boolean} isDev 
   * @returns {string}
   */
const getLink = (url) => {
  if (dev) {
    return `/${url}`;
  }
  return `/${url}.html`;
};

let href = getLink(link);

</script>

<a {href} {title}>
    <slot>{title}</slot>
</a>

<style>
    a {
        color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
    }

    a:hover {
        color: var(--accent-color)
    }
</style>