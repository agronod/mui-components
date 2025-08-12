import { SvgIcon, SvgIconProps, SxProps, Theme } from "@mui/material";
import React from "react";

import EpostIcon from '../../assets/icons/epost.svg?react';
import ErrorContainedIcon from '../../assets/icons/errorContained.svg?react';
import ErrorOutlinedIcon from '../../assets/icons/errorOutlined.svg?react';
import GrisIcon from '../../assets/icons/gris.svg?react';
import InfoContainedIcon from '../../assets/icons/infoContained.svg?react';
import InfoOutlinedIcon from '../../assets/icons/infoOutlined.svg?react';
import MjolkIcon from '../../assets/icons/mjolk.svg?react';
import NavAvtalIcon from '../../assets/icons/navAvtal.svg?react';
import NavDatadelningsInstallningarIcon from '../../assets/icons/navDatadelningsInstallningar.svg?react';
import NavForetagAnvandareIcon from '../../assets/icons/navForetagAnvandare.svg?react';
import NavHemIcon from '../../assets/icons/navHem.svg?react';
import NavKontrollpanelIcon from '../../assets/icons/navKontrollpanel.svg?react';
import NavMarknadKonkurrensIcon from '../../assets/icons/navMarknadKonkurrens.svg?react';
import NotkreaturIcon from '../../assets/icons/notkreatur.svg?react';
import OrgnummerIcon from '../../assets/icons/orgnummer.svg?react';
import ProfilIcon from '../../assets/icons/profil.svg?react';
import SuccessContainedIcon from '../../assets/icons/successContained.svg?react';
import SuccessOutlinedIcon from '../../assets/icons/successOutlined.svg?react';
import VaxtodlingIcon from '../../assets/icons/vaxtodling.svg?react';
import WarningContainedIcon from '../../assets/icons/warningContained.svg?react';
import WarningOutlinedIcon from '../../assets/icons/warningOutlined.svg?react';

const iconMap = {
  'epost': EpostIcon,
  'errorContained': ErrorContainedIcon,
  'errorOutlined': ErrorOutlinedIcon,
  'gris': GrisIcon,
  'infoContained': InfoContainedIcon,
  'infoOutlined': InfoOutlinedIcon,
  'mjolk': MjolkIcon,
  'navAvtal': NavAvtalIcon,
  'navDatadelningsInstallningar': NavDatadelningsInstallningarIcon,
  'navForetagAnvandare': NavForetagAnvandareIcon,
  'navHem': NavHemIcon,
  'navKontrollpanel': NavKontrollpanelIcon,
  'navMarknadKonkurrens': NavMarknadKonkurrensIcon,
  'notkreatur': NotkreaturIcon,
  'orgnummer': OrgnummerIcon,
  'profil': ProfilIcon,
  'successContained': SuccessContainedIcon,
  'successOutlined': SuccessOutlinedIcon,
  'vaxtodling': VaxtodlingIcon,
  'warningContained': WarningContainedIcon,
  'warningOutlined': WarningOutlinedIcon,
} as const;

export type IconName = keyof typeof iconMap;

export interface IconProps extends SvgIconProps {
  name: IconName;
}

const AgronodIcon: React.FC<IconProps> = ({
  name,
  fontSize = "medium",
  color = "inherit",
  sx,
  ...rest
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const styleObject: SxProps = {
    "& *": {
      fill: "currentcolor",
    },
  };

  return (
    <SvgIcon
      component={IconComponent}
      fontSize={fontSize}
      color={color}
      inheritViewBox={false}
      sx={[{ ...styleObject }, sx as (theme: Theme) => any]}
      {...rest}
    />
  );
};

export default AgronodIcon;
