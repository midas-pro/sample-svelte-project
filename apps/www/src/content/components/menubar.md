---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/lib/components/ui/menubar
radix: https://www.radix-svelte.com/docs/radiogroup
external:
  project: Radix Svelte
  url: https://www.radix-svelte.com/docs/radiogroup
---

<script>
    import { MenubarDemo, ComponentExample, ManualInstall } from '$lib/components/docs'
</script>

<ComponentExample src="src/lib/components/docs/examples/menubar/MenubarDemo.svelte">

<div slot="example">
<MenubarDemo />
</div>

</ComponentExample>

## Installation

```bash
npx shadcn-svelte add menubar
```

<ManualInstall>

1. Install `@huntabyte/primitives`:

```bash
npm install @huntabyte/primitives
```

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Menubar from "@/components/ui/menubar";
</script>

<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>
        New Tab
        <MenubarShortcut>⌘T</MenubarShortcut>
      </Menubar.Item>
      <Menubar.Item>New Window</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Share</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Print</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
```
