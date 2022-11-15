<script>
    export let message;
    export let action = () => {};
</script>


<div use:action>
    <p>{message}</p>
</div>