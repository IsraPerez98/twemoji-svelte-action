<script>
    export let message;
    export let action = () => {};
    export let options = {};
</script>


<div use:action={options}>
    <p>{message}</p>
</div>