// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 578p2KiWp3ZSUFPY7FrhK3
// Component: 8ceOxyfszem3bX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_new_ones.module.css"; // plasmic-import: 578p2KiWp3ZSUFPY7FrhK3/projectcss
import sty from "./PlasmicSelect__Overlay.module.css"; // plasmic-import: 8ceOxyfszem3bX/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: 3Vr7VM3BiE8vGJ/render

export const PlasmicSelect__Overlay__VariantProps = new Array(
  "relativePlacement"
);

export const PlasmicSelect__Overlay__ArgProps = new Array("children");

function PlasmicSelect__Overlay__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(variants, "relativePlacement", "bottom") ? true : false) ? (
        <div
          data-plasmic-name={"top"}
          data-plasmic-override={overrides.top}
          className={classNames(projectcss.all, sty.top, {
            [sty.toprelativePlacement_bottom]: hasVariant(
              variants,
              "relativePlacement",
              "bottom"
            )
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"middle"}
        data-plasmic-override={overrides.middle}
        className={classNames(projectcss.all, sty.middle)}
      >
        {(hasVariant(variants, "relativePlacement", "right") ? true : false) ? (
          <div
            data-plasmic-name={"left"}
            data-plasmic-override={overrides.left}
            className={classNames(projectcss.all, sty.left, {
              [sty.leftrelativePlacement_right]: hasVariant(
                variants,
                "relativePlacement",
                "right"
              )
            })}
          />
        ) : null}

        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(projectcss.all, sty.main)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>

        {(hasVariant(variants, "relativePlacement", "left") ? true : false) ? (
          <div
            data-plasmic-name={"right"}
            data-plasmic-override={overrides.right}
            className={classNames(projectcss.all, sty.right, {
              [sty.rightrelativePlacement_left]: hasVariant(
                variants,
                "relativePlacement",
                "left"
              )
            })}
          />
        ) : null}
      </div>

      {(hasVariant(variants, "relativePlacement", "top") ? true : false) ? (
        <div
          data-plasmic-name={"bottom"}
          data-plasmic-override={overrides.bottom}
          className={classNames(projectcss.all, sty.bottom, {
            [sty.bottomrelativePlacement_top]: hasVariant(
              variants,
              "relativePlacement",
              "top"
            )
          })}
        />
      ) : null}
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useTriggeredOverlay(
    PlasmicSelect__Overlay,
    props,
    {
      isPlacedTopVariant: { group: "relativePlacement", variant: "top" },
      isPlacedBottomVariant: { group: "relativePlacement", variant: "bottom" },
      isPlacedLeftVariant: { group: "relativePlacement", variant: "left" },
      isPlacedRightVariant: { group: "relativePlacement", variant: "right" },
      contentSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "top", "middle", "left", "main", "right", "bottom"],
  top: ["top"],
  middle: ["middle", "left", "main", "right"],
  left: ["left"],
  main: ["main"],
  right: ["right"],
  bottom: ["bottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__Overlay__ArgProps,
      internalVariantPropNames: PlasmicSelect__Overlay__VariantProps
    });

    return PlasmicSelect__Overlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Overlay";
  } else {
    func.displayName = `PlasmicSelect__Overlay.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Overlay = Object.assign(
  // Top-level PlasmicSelect__Overlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    top: makeNodeComponent("top"),
    middle: makeNodeComponent("middle"),
    left: makeNodeComponent("left"),
    main: makeNodeComponent("main"),
    right: makeNodeComponent("right"),
    bottom: makeNodeComponent("bottom"),
    // Metadata about props expected for PlasmicSelect__Overlay
    internalVariantProps: PlasmicSelect__Overlay__VariantProps,
    internalArgProps: PlasmicSelect__Overlay__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__Overlay;
/* prettier-ignore-end */
