'use client';

import { IconCloud } from '@/components/magicui/icon-cloud';
import { FileText, Brain, Folder, MessageCircle } from 'lucide-react';
import { useTheme } from 'next-themes'; // Import useTheme

export function IconCloudCard() {
  const { resolvedTheme } = useTheme(); // Get the current theme ('light' or 'dark')

  // Add a check for when the theme is not yet resolved (optional but good practice)
  if (!resolvedTheme) {
    return null; // Or a loading state
  }

  const iconColor = resolvedTheme === 'dark' ? 'white' : 'black'; // Determine color based on theme

  // Define Icons inside the component to access the theme-based color
  const Icons = {
    notion: () => <FileText size={100} color={iconColor} />,
    openai: () => <Brain size={100} color={iconColor} />,
    googleDrive: () => <Folder size={100} color={iconColor} />,
    whatsapp: () => <MessageCircle size={100} color={iconColor} />,
  };

  // Generate unique keys for the icons array
  const iconComponents = [
    { Icon: Icons.notion, baseKey: 'notion' },
    { Icon: Icons.openai, baseKey: 'openai' },
    { Icon: Icons.googleDrive, baseKey: 'gdrive' },
    { Icon: Icons.whatsapp, baseKey: 'whatsapp' },
    { Icon: Icons.notion, baseKey: 'notion' },
    { Icon: Icons.openai, baseKey: 'openai' },
    { Icon: Icons.googleDrive, baseKey: 'gdrive' },
    { Icon: Icons.whatsapp, baseKey: 'whatsapp' },
    { Icon: Icons.notion, baseKey: 'notion' },
    { Icon: Icons.openai, baseKey: 'openai' },
    { Icon: Icons.googleDrive, baseKey: 'gdrive' },
    { Icon: Icons.whatsapp, baseKey: 'whatsapp' },
    { Icon: Icons.notion, baseKey: 'notion' },
    { Icon: Icons.openai, baseKey: 'openai' },
    { Icon: Icons.googleDrive, baseKey: 'gdrive' },
    { Icon: Icons.whatsapp, baseKey: 'whatsapp' },
    { Icon: Icons.notion, baseKey: 'notion' },
    { Icon: Icons.openai, baseKey: 'openai' },
    { Icon: Icons.googleDrive, baseKey: 'gdrive' },
    { Icon: Icons.whatsapp, baseKey: 'whatsapp' },
  ].map(({ Icon, baseKey }, index) => <Icon key={`${baseKey}-${index}`} />);

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
      <IconCloud icons={iconComponents} />
    </div>
  );
}
