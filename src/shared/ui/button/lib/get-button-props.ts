import {
  type ButtonProps,
  BUTTON_PRESETS,
  BUTTON_UI_PROPS,
} from '@/shared/ui/button';

export const getButtonProps = (props: ButtonProps) => {
  const { preset, ...rest } = props;

  const presetProps =
    preset && preset in BUTTON_PRESETS ? BUTTON_PRESETS[preset] : {};

  const allProps = { ...presetProps, ...rest };

  const htmlProps = { ...allProps };

  BUTTON_UI_PROPS.forEach((key) => {
    delete htmlProps[key as keyof typeof htmlProps];
  });

  return { allProps, htmlProps };
};
