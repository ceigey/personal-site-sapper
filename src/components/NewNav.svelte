<script>
  export let segment;

  let list;
  let resized = false;
  let count = [ 1, 2, 3, 4, 5, 6, 7 ]

  $: console.log(list && list.clientHeight);

  $: classCurrent = key => {
    if (segment === key) {
      return "current-segment";
    }
  };

  $: ariaCurrent = key => {
    if (segment === key) {
      return "page";
    }
    return undefined;
  };

  function reportWindowSize() {
    if (list && list.clientHeight > 36) {
      // while (list && list.clientHeight > 36) {
      //   count.pop();
      // }
      console.log(window.innerHeight, window.innerWidth);
    }
  }

  
  // function isOverflown(element) {
  //   return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  // }

  // https://stackoverflow.com/questions/41510000/add-overflow-menu-items-to-dropdown-menu

  // // https://svelte.dev/tutorial/bind-this
</script>

<style>
  nav {
    height: 36px;
    background: #dddddd;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 36px;
    background: #cccccc;
    margin: 0;
    list-style-type: none;
  }

  li:hover {
    background: #aaaaaa;
  }

  .current-segment {
    background: #888888;
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:window on:resize={reportWindowSize} />
<nav>
  <ul id="debug" bind:this={list}>
    <li class={classCurrent(undefined)}>
      <a aria-current={ariaCurrent(undefined)} href=".">home</a>
    </li>
    <li class={classCurrent('about')}>
      <a aria-current={ariaCurrent('about')} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li class={classCurrent('blog')}>
      <a rel="prefetch" aria-current={ariaCurrent('blog')} href="blog">blog</a>
    </li>

    <!-- ------------ ------------- ------------ -->
    {#each count as num}
      <li class={classCurrent(undefined)}>
        <a aria-current={ariaCurrent(undefined)} href=".">home</a>
      </li>
      <li class={classCurrent('about')}>
        <a aria-current={ariaCurrent('about')} href="about">about</a>
      </li>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li class={classCurrent('blog')}>
        <a rel="prefetch" aria-current={ariaCurrent('blog')} href="blog">blog</a>
      </li>
    {/each}

  </ul>
</nav>
