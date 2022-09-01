<script>
    let originalUrl, decodedUrl = null, convertedUrl = null;
    $: {
        try {
            convertedUrl = transformCardUrlForSocialShare(originalUrl);
        } catch (error) {
            
        }
    }

    export const transformCardUrlForSocialShare = (url) => {
  let urlObj;
  try {
      urlObj = new URL(url);
      
    } catch (error) {
        urlObj = new URL(decodeURIComponent(url));
  }
  
  const post = urlObj.hash.substring(1);
  if (!post) {
    return url;
  }
  const params = new URLSearchParams(urlObj.searchParams);
  params.set('post', post);
  urlObj.search = params;
  return urlObj.toString();
};
</script>

<style>
    input {
        width: 100%;
    }
</style>


<p>

    Enter URL here:
    <input  type="url" name="" id="" bind:value={originalUrl}>
</p>
<!-- <p>
    Decoded URL: {decodedUrl}
</p> -->
<p>

    Output: 
</p>
<pre><code>{convertedUrl ?? ' '}</code></pre>
