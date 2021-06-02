<script>
	export let className = '';
	export let imageSource = '';
</script>

<picture>
	<source srcset="{imageSource}.webp" type="image/webp" />
	<img class={className} src="{imageSource}.jpg" alt="" />
</picture>
