// This is a conceptual representation, not an actual file you'd edit
import type { ServerOptions, PluginOption, BuildOptions, UserConfigExport } from 'vite';

declare module 'vite' {
  interface UserConfig {
    // ... various configuration options and their types
    plugins?: PluginOption[];
    build?: BuildOptions;
    server?: ServerOptions;
    // ...
  }

  function defineConfig(config: UserConfigExport): UserConfig;
}