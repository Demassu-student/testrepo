// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 578p2KiWp3ZSUFPY7FrhK3
// Component: Yea3wiMBit
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: InkiWn_hJlV/component
import NavigationBar from "../../NavigationBar"; // plasmic-import: BLtbByl5tB5/component
import Select from "../../Select"; // plasmic-import: 3Vr7VM3BiE8vGJ/component
import { useScreenVariants as useScreenVariantstU3UFp3Zwbn8D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _tU3UFp3Zwbn8d/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_new_ones.module.css"; // plasmic-import: 578p2KiWp3ZSUFPY7FrhK3/projectcss
import sty from "./PlasmicGd.module.css"; // plasmic-import: Yea3wiMBit/css

export const PlasmicGd__VariantProps = new Array();

export const PlasmicGd__ArgProps = new Array("children", "children2");

function PlasmicGd__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstU3UFp3Zwbn8D()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__x3SAn)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__im2Tl)}>
                  <div
                    data-plasmic-name={"handsRandomStuff"}
                    data-plasmic-override={overrides.handsRandomStuff}
                    className={classNames(projectcss.all, sty.handsRandomStuff)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dquD4)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "auto"
                          : "324px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "100%"
                          : "100%"
                      }
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "105px"
                          : "auto"
                      }
                      loading={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "lazy"
                          : "lazy"
                      }
                      src={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? {
                              src: "/plasmic/new_ones/images/group1.svg",
                              fullWidth: 120.929,
                              fullHeight: 319.179,
                              aspectRatio: 0.378125
                            }
                          : {
                              src: "/plasmic/new_ones/images/group1.svg",
                              fullWidth: 120.929,
                              fullHeight: 319.179,
                              aspectRatio: 0.378125
                            }
                      }
                    />
                  </div>

                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__jrqgp)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "327px"
                          : "373px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "none"
                          : "none"
                      }
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "auto"
                          : "64px"
                      }
                      loading={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "lazy"
                          : "lazy"
                      }
                      src={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? {
                              src: "/plasmic/new_ones/images/group.svg",
                              fullWidth: 92.46,
                              fullHeight: 572.244,
                              aspectRatio: 0.162304
                            }
                          : {
                              src: "/plasmic/new_ones/images/group.svg",
                              fullWidth: 92.46,
                              fullHeight: 572.244,
                              aspectRatio: 0.162304
                            }
                      }
                    />
                  ) : null}
                </div>
              ) : null}

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kZtc1)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zYpZ)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zZKbv
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Woohoo, I'm still developing this page"
                      : "Woohoo, I'm still developing this page"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cpgDs
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "It'll be done shortly. Okay, say hello to my little microcopy!"
                      : "It'll be done shortly. Okay, say hello to my little microcopy!"}
                  </div>
                </p.Stack>

                {p.renderPlasmicSlot({
                  defaultContents: (
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__ixL6R
                      )}
                      link={"/"}
                    >
                      {"Take me home"}
                    </Button>
                  ),

                  value: args.children,
                  className: classNames(sty.slotTargetChildren)
                })}
              </p.Stack>
            </p.Stack>
          ) : null}

          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <Select
                  className={classNames("__wab_instance", sty.select__r5Hcc)}
                  placeholder={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yOxds
                      )}
                    >
                      {"Selected works"}
                    </div>
                  }
                  selectedContent={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__c7G1J
                      )}
                    >
                      {"Selected works"}
                    </div>
                  }
                />
              ),

              value: args.children2
            })}
          </NavigationBar>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "handsRandomStuff", "navigationBar"],
  handsRandomStuff: ["handsRandomStuff"],
  navigationBar: ["navigationBar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicGd__ArgProps,
      internalVariantPropNames: PlasmicGd__VariantProps
    });

    return PlasmicGd__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGd";
  } else {
    func.displayName = `PlasmicGd.${nodeName}`;
  }
  return func;
}

export const PlasmicGd = Object.assign(
  // Top-level PlasmicGd renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    handsRandomStuff: makeNodeComponent("handsRandomStuff"),
    navigationBar: makeNodeComponent("navigationBar"),
    // Metadata about props expected for PlasmicGd
    internalVariantProps: PlasmicGd__VariantProps,
    internalArgProps: PlasmicGd__ArgProps
  }
);

export default PlasmicGd;
/* prettier-ignore-end */
