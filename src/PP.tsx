import React, { useState } from "react";
import SplitView from "./SplitView";
import FontsAccordion from "./FontsAccordion";
import "./style.css";

const fontsData = [
    {
        goodFontName: "roboto-medium",
        badFonts: [
            {
                fontName: "Cabin Regular",
                className: "cabin-regular"
            }
        ]
    },
    {
        goodFontName: "roboto-bold",
        badFonts: [
            {
                fontName: "Probapro Bold",
                className: "probapro-bold"
            }
        ]
    },
    {
        goodFontName: "roboto-italic",
        badFonts: [
            {
                fontName: "Probapro Italics",
                className: "probapro-italic"
            }
        ]
    },
    {
        goodFontName: "roboto-light",
        badFonts: [
            {
                fontName: "Probapro Light",
                className: "probapro-light"
            }
        ]
    },
    {
        goodFontName: "roboto-regular",
        badFonts: [
            {
                fontName: "Probapro Regular",
                className: "probapro-regular"
            }
        ]
    },
    {
        goodFontName: "roboto-regular",
        badFonts: [
            {
                fontName: "Probapro Medium",
                className: "probapro-medium"
            }
        ]
    },
    {
        goodFontName: "roboto-medium",
        badFonts: [
            {
                fontName: "Probapro Semi Bold",
                className: "probapro-semibold"
            }
        ]
    }
];

const PP = () => {
    const [selectedBadFont, setSelectedBadFont] = useState<string | null>(null);

    const handleBadFontSelect = (selectedFont: string) => {
        setSelectedBadFont(selectedFont);
    };

    const transformedFontsData = fontsData.flatMap((pair) =>
        pair.badFonts.map((badFont) => ({
            fontName: badFont.fontName,
            className: badFont.className,
            samples: ["H1", "H2", "H3", "H4", "H5", "P"]
        }))
    );

    return (
        <SplitView
            leftContent={
                <FontsAccordion
                    title="Bad Fonts"
                    fontsData={transformedFontsData}
                    onFontSelect={handleBadFontSelect}
                    isBadFont={true}
                />
            }
            rightContent={
                <FontsAccordion
                    title="Good Fonts"
                    fontsData={
                        selectedBadFont
                            ? fontsData
                                  .filter((pair) =>
                                      pair.badFonts.some((badFont) => badFont.fontName === selectedBadFont)
                                  )
                                  .map(({ goodFontName }) => ({
                                      fontName: goodFontName,
                                      samples: ["H1", "H2", "H3", "H4", "H5", "P"]
                                  }))
                            : []
                    }
                    isBadFont={false}
                />
            }
        />
    );
};

export default PP;
