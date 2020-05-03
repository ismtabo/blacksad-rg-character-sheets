<script lang="typescript">
  import { onMount } from "svelte";
  import { locale, locales } from "svelte-i18n";
  import { setupI18n, _ } from "./i18n";
  import Sheet from "./pages/Sheet.svelte";

  setupI18n({ withLocale: "en" });
</script>

<style lang="scss" global>
  @import "./style/global.scss";
  :root {
    --title-font: #{$title-font};
    --input-font: #{$input-font};
    --subtitle-font: #{$subtitle-font};
    --boldest: 800;
  }

  :global(.title),
  :global(.caption),
  :global(.label),
  :global(label) {
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  :global(input),
  :global(textarea) {
    font-family: var(--input-font);
  }

  :global(.title) {
    text-align: end;
  }

  :global(h1) {
    font-size: 3em;
  }

  :global(h2) {
    font-size: 2.5em;
  }

  :global(.label) {
    text-align: end;
    font-weight: bold;
    font-size: 1.5em;
  }

  :global(.concept-title) {
    font-family: $subtitle-font;
  }

  .letter {
    padding: 4em 1.5em;
    --width: 60em;
    width: var(--width);
    height: calc(var(--width) * 1.413793103);
  }

  @media (min-width: 800px) {
    body {
      background: linear-gradient(#ccc, #fff);
      height: 100vh;
      width: 100vw;

      main {
        .letter {
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin: 1.625em auto 0;
          position: relative;

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
    padding: 1em;

    .navbar {
      height: 4.375ems;
      width: 100%;
      .navbar-nav {
        list-style-type: none;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;

        .nav-item .mdi {
          font-size: 3em;
        }

        .nav-item.has-dropdown:focus-within .dropdown {
          opacity: 1;
          pointer-events: auto;
        }

        .dropdown {
          background: white;
          border-radius: 10%;
          display: flex;
          flex-direction: column;
          list-style: none;
          opacity: 0;
          padding: 0.5em;
          position: absolute;
          transition: opacity 0.15s ease-out;
          width: 4em;
          z-index: 1;

          .dropdown-item .locale {
            display: flex;
            font-family: var(--input-font);
            justify-content: space-between;
            text-decoration: none;
            text-transform: uppercase;
            width: 100%;

            &.active {
              font-weight: var(--boldest);
            }

            &:visited {
              text-decoration: none;
            }
          }
        }
      }

      .title {
        text-justify: center;
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
              <a
                class="locale"
                href="#"
                class:active={$locale == _locale}
                on:click={() => locale.set(_locale)}>
                {_locale}
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
