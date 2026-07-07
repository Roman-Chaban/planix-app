import { SettingSwitchList } from '../../settings-switch/ui/SettingSwitchList';
import { securityList } from '../lib/security-list';

export const SystemSecurity = () => {
  return <SettingSwitchList list={securityList} />;
};
