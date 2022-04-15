// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 578p2KiWp3ZSUFPY7FrhK3
// Component: UFO_FR1k5hVzkR
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_new_ones.module.css"; // plasmic-import: 578p2KiWp3ZSUFPY7FrhK3/projectcss
import sty from "./PlasmicHeading1BillieHome.module.css"; // plasmic-import: UFO_FR1k5hVzkR/css
import ArrowUpRightIcon from "./icons/PlasmicIcon__ArrowUpRight"; // plasmic-import: xa6I7_9Y9zpgmB/icon

export const PlasmicHeading1BillieHome__VariantProps = new Array();

export const PlasmicHeading1BillieHome__ArgProps = new Array();

function PlasmicHeading1BillieHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={"/billie"}
      platform={"nextjs"}
      target={"_blank"}
    >
      <div
        data-plasmic-name={"heading3"}
        data-plasmic-override={overrides.heading3}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heading3
        )}
      >
        {"Billie - A personal Budgeting app"}
      </div>

      <div
        data-plasmic-name={"iconWrap3"}
        data-plasmic-override={overrides.iconWrap3}
        className={classNames(projectcss.all, sty.iconWrap3)}
      >
        <ArrowUpRightIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "heading3", "iconWrap3", "svg"],
  heading3: ["heading3"],
  iconWrap3: ["iconWrap3", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeading1BillieHome__ArgProps,
      internalVariantPropNames: PlasmicHeading1BillieHome__VariantProps
    });

    return PlasmicHeading1BillieHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeading1BillieHome";
  } else {
    func.displayName = `PlasmicHeading1BillieHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHeading1BillieHome = Object.assign(
  // Top-level PlasmicHeading1BillieHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heading3: makeNodeComponent("heading3"),
    iconWrap3: makeNodeComponent("iconWrap3"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHeading1BillieHome
    internalVariantProps: PlasmicHeading1BillieHome__VariantProps,
    internalArgProps: PlasmicHeading1BillieHome__ArgProps
  }
);

export default PlasmicHeading1BillieHome;
/* prettier-ignore-end */
