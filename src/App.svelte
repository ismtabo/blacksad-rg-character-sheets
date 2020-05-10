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
    --tooltip-font: #{$tooltip-font};
    --boldest: 800;
    --color1: #{$color1};
    --color2: #{$color2};
    --color3: #{$color3};
    --color4: #{$color4};
    --color5: #{$color5};
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
    padding-right: 0.25em;
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

  @media (min-width: 1024px) {
    body {
      background: linear-gradient(#ccc, #fff);

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

  @media (max-width: 1024px) {
    .letter {
      width: 100%;
      height: unset;
    }
  }

  body {
    display: grid;
    grid-template: "header" 4.375em "main" auto;
    overflow-x: hidden;
    width: 100%;

    header {
      align-items: center;
      background-color: var(--color1);
      display: flex;
      grid-area: header;
      height: 100%;
      max-width: 100%;
      padding: 1rem;
      width: 100%;

      .navbar {
        width: 100%;

        .navbar-nav {
          list-style-type: none;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;

          &.languages a,
          a:visited {
            color: var(--color5);
            text-decoration: none;
          }

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
            border-top-left-radius: 0;
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
              color: var(--color1);

              &.active {
                font-weight: var(--boldest);
              }

              &:visited {
                text-decoration: none;
              }
            }

            &::before {
              content: "";
              height: 1.5em;
              width: 1.5em;
              position: absolute;
              top: -1.5em;
              left: 0;
              border-bottom-left-radius: 50%;
              box-shadow: 0 .75em 0 0 white;
              z-index: -1;
            }
          }
        }
      }

      .title {
        color: var(--color5);
        .main {
          font-size: 2.5em;
        }
        .subtitle {
          color: var(--color4);
        }
      }
    }
  }

  @media (max-width: 420px) {
    body {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>{$_('app.title')}</title>
</svelte:head>

<header>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item has-dropdown languages">
        <a href="#" title={$_('app.languages')}>
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
  <div class="title">
    <h1 class="main">BLACKSAD</h1>
    <h5 class="subtitle">{$_('app.subtitle')}</h5>
  </div>
</header>

<main>
  <div class="letter">
    <Sheet class="sheet" />
  </div>
</main>

<footer>

</footer>
