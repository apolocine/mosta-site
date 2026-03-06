import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/settings — Key-Value Settings' }

export default function SettingsPage() {
  return (
    <PackagePage
      pkg={packages[3]}
      quickStart={`import { createSettingsModule, SettingSchema } from '@mostajs/settings'
import { registerSchema } from '@mostajs/orm'

// 1. Register schema
registerSchema(SettingSchema)

// 2. Create typed settings module
const DEFAULTS = {
  siteName: 'MyApp',
  maintenanceMode: false,
  theme: 'system' as 'light' | 'dark' | 'system',
}

const { getSettings, updateSettings } = createSettingsModule({
  defaults: DEFAULTS,
})

// 3. Use (fully typed!)
const settings = await getSettings()
console.log(settings.siteName) // 'MyApp'

await updateSettings({ maintenanceMode: true })`}
      apiRows={[
        ['createSettingsModule(config)', 'Factory returning getSettings/updateSettings'],
        ['SettingRepository', 'Repository with findByKey, upsertByKey, upsertMany'],
        ['SettingSchema', 'Entity schema for registration'],
        ['createSettingsHandlers(perm, check, module)', 'API route factory (GET/PUT)'],
        ['SettingsProvider', 'React context provider'],
        ['SettingsForm', 'Auto-generated settings form component'],
        ['useSettings()', 'React hook for settings context'],
      ]}
    />
  )
}
