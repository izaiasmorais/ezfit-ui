# @ezfit/ui

Design system EZFIT em React + TypeScript para dashboards de saude, dieta e treino. Estilizado com Tailwind v4 (CSS variables + CVA), acessibilidade via Radix UI, graficos com Recharts e icones hugeicons.

## Desenvolvimento

```bash
bun install
bun run dev            # Storybook em http://localhost:6006
bun run build          # gera dist/ (index.js + index.d.ts + styles.css)
bun run build-storybook
bun run typecheck
bun run lint
```

## Uso em um app Vite + React

```bash
bun add @ezfit/ui
```

```tsx
import "@ezfit/ui/styles.css";
import { Button, StatCard, ToastProvider } from "@ezfit/ui";

export function App() {
  return (
    <ToastProvider>
      <Button variant="accent">Adicionar refeicao</Button>
    </ToastProvider>
  );
}
```

O CSS distribuido (`@ezfit/ui/styles.css`) ja contem todas as classes utilizadas pelos componentes e os design tokens. Tema escuro: adicione a classe `dark` em um ancestral.

## Componentes

- **Primitivos:** Button, Badge, Card, IconTile
- **Inputs:** Input, SearchInput, Switch, Checkbox, RadioGroup, Slider, Select, Tabs, Accordion
- **Layout:** Sidebar, NavItem, Topbar, ProfileCard
- **Dados:** StatCard, ProgressBar, ProgressRing, TrendItem, HydrationTracker, MacroBreakdown
- **Graficos:** BarChart, AreaChart, DonutChart, ChartLegend, ChartTooltip, ChartEmptyState
- **Conteudo:** ListItem (Meal/Workout/Hydration), DataTable, FilterChips
- **Feedback:** Banner, Dialog/Modal, Toast (`ToastProvider` + `useToast`), Tooltip, Skeleton, Spinner, EmptyState

## Tokens

Definidos em `src/styles.css` (bloco `@theme`). Constantes JS (`colors`, `chartColors`, `radius`, `fontFamily`) exportadas do pacote para uso em graficos.
