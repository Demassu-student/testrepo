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
import Head from "next/head";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Select from "../../Select"; // plasmic-import: 3Vr7VM3BiE8vGJ/component
import Button from "../../Button"; // plasmic-import: InkiWn_hJlV/component
import { useScreenVariants as useScreenVariantstU3UFp3Zwbn8D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _tU3UFp3Zwbn8d/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_new_ones.module.css"; // plasmic-import: 578p2KiWp3ZSUFPY7FrhK3/projectcss
import sty from "./PlasmicGd.module.css"; // plasmic-import: Yea3wiMBit/css
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: _x1MasHkDimG3R/icon

export const PlasmicGd__VariantProps = new Array();

export const PlasmicGd__ArgProps = new Array("children", "children2");

function PlasmicGd__RenderFunc(props) {
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
          <nav
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              className={classNames(projectcss.all, sty.container)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__znp0
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Demassu"
                    : "Demassu"}
                </div>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"navigation"}
                data-plasmic-override={overrides.navigation}
                hasGap={true}
                className={classNames(projectcss.all, sty.navigation)}
              >
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    data-plasmic-name={"about"}
                    data-plasmic-override={overrides.about}
                    className={classNames(projectcss.all, sty.about)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"buttonBase"}
                      data-plasmic-override={overrides.buttonBase}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.buttonBase)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dxF6I
                        )}
                      >
                        {"About"}
                      </div>
                    </p.Stack>
                  </div>
                ) : null}

                <p.PlasmicLink
                  data-plasmic-name={"resume"}
                  data-plasmic-override={overrides.resume}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.resume
                  )}
                  component={Link}
                  href={
                    "https://drive.google.com/file/d/1vgvvd75g-qOlASarEFExVm5XespOuaOK/view?usp=sharing"
                  }
                  platform={"nextjs"}
                >
                  <div
                    data-plasmic-name={"button3"}
                    data-plasmic-override={overrides.button3}
                    className={classNames(projectcss.all, sty.button3)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"buttonBase3"}
                      data-plasmic-override={overrides.buttonBase3}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.buttonBase3)}
                    >
                      <div
                        data-plasmic-name={"text3"}
                        data-plasmic-override={overrides.text3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text3
                        )}
                      >
                        {"Resume"}
                      </div>

                      {false ? (
                        <ChevronDownIcon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />
                      ) : null}
                    </p.Stack>
                  </div>
                </p.PlasmicLink>

                <div
                  data-plasmic-name={"contact"}
                  data-plasmic-override={overrides.contact}
                  className={classNames(projectcss.all, sty.contact)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"buttonBase4"}
                    data-plasmic-override={overrides.buttonBase4}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.buttonBase4)}
                  >
                    <div
                      data-plasmic-name={"text4"}
                      data-plasmic-override={overrides.text4}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text4
                      )}
                    >
                      {"Contact"}
                    </div>
                  </p.Stack>
                </div>

                {p.renderPlasmicSlot({
                  defaultContents: (
                    <Select
                      className={classNames(
                        "__wab_instance",
                        sty.select__oFjPq
                      )}
                      placeholder={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8Oc4K
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
                            sty.text__idiHx
                          )}
                        >
                          {"Selected works"}
                        </div>
                      }
                    />
                  ),

                  value: args.children2
                })}
              </p.Stack>
            </div>
          </nav>

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
                      ? "Woohoo, I'm working on this page"
                      : "Woohoo, I'm working on this page"}
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
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "container",
    "navigation",
    "about",
    "buttonBase",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4",
    "handsRandomStuff"
  ],

  header: [
    "header",
    "container",
    "navigation",
    "about",
    "buttonBase",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  container: [
    "container",
    "navigation",
    "about",
    "buttonBase",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  navigation: [
    "navigation",
    "about",
    "buttonBase",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  about: ["about", "buttonBase"],
  buttonBase: ["buttonBase"],
  resume: ["resume", "button3", "buttonBase3", "text3", "svg"],
  button3: ["button3", "buttonBase3", "text3", "svg"],
  buttonBase3: ["buttonBase3", "text3", "svg"],
  text3: ["text3"],
  svg: ["svg"],
  contact: ["contact", "buttonBase4", "text4"],
  buttonBase4: ["buttonBase4", "text4"],
  text4: ["text4"],
  handsRandomStuff: ["handsRandomStuff"]
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
    header: makeNodeComponent("header"),
    container: makeNodeComponent("container"),
    navigation: makeNodeComponent("navigation"),
    about: makeNodeComponent("about"),
    buttonBase: makeNodeComponent("buttonBase"),
    resume: makeNodeComponent("resume"),
    button3: makeNodeComponent("button3"),
    buttonBase3: makeNodeComponent("buttonBase3"),
    text3: makeNodeComponent("text3"),
    svg: makeNodeComponent("svg"),
    contact: makeNodeComponent("contact"),
    buttonBase4: makeNodeComponent("buttonBase4"),
    text4: makeNodeComponent("text4"),
    handsRandomStuff: makeNodeComponent("handsRandomStuff"),
    // Metadata about props expected for PlasmicGd
    internalVariantProps: PlasmicGd__VariantProps,
    internalArgProps: PlasmicGd__ArgProps
  }
);

export default PlasmicGd;
/* prettier-ignore-end */
