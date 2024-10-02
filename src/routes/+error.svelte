<script>
    import { page } from '$app/stores';
</script>

<section>
    <div class="container">
        <div class="flex justify-center items-center" style="height: 50vh;">
            <h1 class="text-3xl text-center">{$page.status}: {$page.error.message}</h1>
        </div>
    </div>
</section>