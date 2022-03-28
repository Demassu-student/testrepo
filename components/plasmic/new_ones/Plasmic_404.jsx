// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 578p2KiWp3ZSUFPY7FrhK3
// Component: NgNO4sKi6f
import * as React from "react";
import Head from "next/head";
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
import sty from "./Plasmic_404.module.css"; // plasmic-import: NgNO4sKi6f/css

export const Plasmic_404__VariantProps = new Array();

export const Plasmic_404__ArgProps = new Array("children", "children2");

function Plasmic_404__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstU3UFp3Zwbn8D()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

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
              className={classNames(projectcss.all, sty.freeBox__eGoj)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__tRw05)}>
                  <div
                    data-plasmic-name={"handsRandomStuff"}
                    data-plasmic-override={overrides.handsRandomStuff}
                    className={classNames(projectcss.all, sty.handsRandomStuff)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__awulr)}
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
                      className={classNames(sty.img__gpYsD)}
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
                className={classNames(projectcss.all, sty.freeBox__uT8Cg)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0TuDr)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kaLre
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
                      sty.text__xhfcd
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
                      className={classNames("__wab_instance", sty.button__kNv5)}
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
                  className={classNames("__wab_instance", sty.select__p9KpK)}
                  placeholder={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iIkHi
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
                        sty.text___4S2Us
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
      internalArgPropNames: Plasmic_404__ArgProps,
      internalVariantPropNames: Plasmic_404__VariantProps
    });

    return Plasmic_404__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_404";
  } else {
    func.displayName = `Plasmic_404.${nodeName}`;
  }
  return func;
}

export const Plasmic_404 = Object.assign(
  // Top-level Plasmic_404 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    handsRandomStuff: makeNodeComponent("handsRandomStuff"),
    navigationBar: makeNodeComponent("navigationBar"),
    // Metadata about props expected for Plasmic_404
    internalVariantProps: Plasmic_404__VariantProps,
    internalArgProps: Plasmic_404__ArgProps
  }
);

export default Plasmic_404;
/* prettier-ignore-end */
