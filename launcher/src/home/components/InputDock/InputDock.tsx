import type { InputSource } from "../../../contracts/launcher";
import type { ThemeBase } from "../../../contracts/preferences";
import { useTranslation } from "../../../shared/i18n/useTranslation";
import type { HomeEnvironment } from "../../types";
import { HomeSectionHeading } from "../HomeSectionHeading/HomeSectionHeading";
import { InputCard } from "../InputCard/InputCard";

import styles from "./InputDock.module.css";

export const InputDock = ({
  env,
  inputs,
  visible,
  variant,
}: {
  env: HomeEnvironment;
  inputs: readonly InputSource[];
  visible: boolean;
  variant: ThemeBase;
}) => {
  const { t } = useTranslation();
  const compact = inputs.length < 5;
  return (
    <section id="inputs-section" data-home-section="inputs" hidden={!visible || !inputs.length}>
      <HomeSectionHeading title={t("common.inputs")} />
      <div
        id="inputs"
        class={styles.dock}
        data-input-dock
        data-variant={variant}
        data-compact={compact ? "true" : "false"}
      >
        {inputs.map((source) => (
          <InputCard
            key={env.runtime.inputs.portName(source)}
            env={env}
            source={source}
            variant={variant}
            compact={compact}
          />
        ))}
      </div>
    </section>
  );
};
