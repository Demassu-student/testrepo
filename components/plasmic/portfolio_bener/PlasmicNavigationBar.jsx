// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 578p2KiWp3ZSUFPY7FrhK3
// Component: BLtbByl5tB5
import * as React from "react";
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
import { useScreenVariants as useScreenVariantstU3UFp3Zwbn8D } from "../new_ones/PlasmicGlobalVariant__Screen"; // plasmic-import: _tU3UFp3Zwbn8d/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../new_ones/plasmic_new_ones.module.css"; // plasmic-import: 578p2KiWp3ZSUFPY7FrhK3/projectcss
import sty from "./PlasmicNavigationBar.module.css"; // plasmic-import: BLtbByl5tB5/css
import ChevronDownIcon from "../new_ones/icons/PlasmicIcon__ChevronDown"; // plasmic-import: _x1MasHkDimG3R/icon

export const PlasmicNavigationBar__VariantProps = new Array();

export const PlasmicNavigationBar__ArgProps = new Array("children");

function PlasmicNavigationBar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstU3UFp3Zwbn8D()
  });

  return (
    <nav
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      />

      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            {"Demassu"}
          </p.PlasmicLink>
        ) : null}

        <p.Stack
          as={"div"}
          data-plasmic-name={"navigation"}
          data-plasmic-override={overrides.navigation}
          hasGap={true}
          className={classNames(projectcss.all, sty.navigation)}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
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
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
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
            className={classNames(projectcss.all, projectcss.a, sty.resume)}
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
                className={classNames("__wab_instance", sty.select__j7Fdv)}
                placeholder={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__piV4H
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
                      sty.text__edsIk
                    )}
                  >
                    {"Selected works"}
                  </div>
                }
              />
            ),

            value: args.children
          })}
        </p.Stack>
      </div>
    </nav>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "container",
    "link",
    "navigation",
    "about",
    "buttonBase",
    "text",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  freeBox: ["freeBox"],
  container: [
    "container",
    "link",
    "navigation",
    "about",
    "buttonBase",
    "text",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  link: ["link"],
  navigation: [
    "navigation",
    "about",
    "buttonBase",
    "text",
    "resume",
    "button3",
    "buttonBase3",
    "text3",
    "svg",
    "contact",
    "buttonBase4",
    "text4"
  ],

  about: ["about", "buttonBase", "text"],
  buttonBase: ["buttonBase", "text"],
  text: ["text"],
  resume: ["resume", "button3", "buttonBase3", "text3", "svg"],
  button3: ["button3", "buttonBase3", "text3", "svg"],
  buttonBase3: ["buttonBase3", "text3", "svg"],
  text3: ["text3"],
  svg: ["svg"],
  contact: ["contact", "buttonBase4", "text4"],
  buttonBase4: ["buttonBase4", "text4"],
  text4: ["text4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavigationBar__ArgProps,
      internalVariantPropNames: PlasmicNavigationBar__VariantProps
    });

    return PlasmicNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigationBar";
  } else {
    func.displayName = `PlasmicNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationBar = Object.assign(
  // Top-level PlasmicNavigationBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    container: makeNodeComponent("container"),
    link: makeNodeComponent("link"),
    navigation: makeNodeComponent("navigation"),
    about: makeNodeComponent("about"),
    buttonBase: makeNodeComponent("buttonBase"),
    text: makeNodeComponent("text"),
    resume: makeNodeComponent("resume"),
    button3: makeNodeComponent("button3"),
    buttonBase3: makeNodeComponent("buttonBase3"),
    text3: makeNodeComponent("text3"),
    svg: makeNodeComponent("svg"),
    contact: makeNodeComponent("contact"),
    buttonBase4: makeNodeComponent("buttonBase4"),
    text4: makeNodeComponent("text4"),
    // Metadata about props expected for PlasmicNavigationBar
    internalVariantProps: PlasmicNavigationBar__VariantProps,
    internalArgProps: PlasmicNavigationBar__ArgProps
  }
);

export default PlasmicNavigationBar;
/* prettier-ignore-end */
