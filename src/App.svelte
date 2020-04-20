<script lang="typescript">
  import { onMount } from "svelte";
  import { locales } from "svelte-i18n";
  import { setupI18n, _ } from "./i18n";
  import Sheet from "./components/Sheet.svelte";

  setupI18n({ withLocale: "en" });
</script>

<style lang="scss" global>
  @import "./style/global.scss";

  :global(.title),
  :global(.caption),
  :global(.label),
  :global(label) {
    font-family: $title-font;
  }

  :global(input),
  :global(textarea) {
    font-family: $input-font;
  }

  :global(.concept-title) {
    font-family: $subtitle-font;
  }
  @media (min-width: 800px) {
    body {
      background: linear-gradient(#ccc, #fff);
      main {
        .letter {
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin: 26px auto 0;
          padding: 24px;
          position: relative;
          width: 80%;
          &:before,
          &:after {
            content: "";
            height: 98%;
            position: absolute;
            width: 100%;
            z-index: -1;
          }
          &:before {
            background: #fafafa;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
            left: -5px;
            top: 4px;
            transform: rotate(-2.5deg);
          }
          &:after {
            background: #f6f6f6;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
            right: -3px;
            top: 1px;
            transform: rotate(1.4deg);
          }
        }
      }
    }
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .navbar {
      height: 70px;
      width: 100%;
    }

    .navbar-nav {
      list-style-type: none;
      margin: 0;
      padding: 0;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;

      .nav-item .mdi {
        font-size: 3em;
      }

      .nav-item:first-child {
        margin-left: 2em;
      }

      .nav-item.has-dropdown:focus-within .dropdown {
        opacity: 1;
        pointer-events: auto;
      }

      .dropdown {
        opacity: 0;
        position: absolute;
        width: fit-content;
        z-index: 2;

        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 3rem;
        margin-top: 2rem;
        padding: 0.5rem;

        transform: translateX(-40%);
        transition: opacity 0.15s ease-out;
        .dropdown-item a {
          width: 100%;
          height: 100%;
          text-decoration: none;
        }
      }
    }
  }
</style>

<header>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item has-dropdown">
        <a href="#" title={$_('app.languages', { default: 'Languages' })}>
          <i class="mdi mdi-web" />
        </a>
        <ul class="dropdown">
          {#each $locales as _locale}
            <li class="dropdown-item">
              <a href="#">
                {_locale.toUpperCase()}
                <i
                  class="flag-icon flag-icon-{_locale == 'en' ? 'us' : _locale}" />
              </a>
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </nav>
  <h1 class="title">BLACKSAD</h1>
</header>

<main>
  <div class="letter">
    <Sheet class="sheet" />
  </div>
</main>
