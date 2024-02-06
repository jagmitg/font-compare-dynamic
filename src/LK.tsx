import React, { useState } from "react";
import SplitView from "./SplitView";
import FontsAccordion from "./FontsAccordion";
import "./style.css";

const fontsData = [
    {
        goodFontName: "alegreya-sans-bold",
        badFonts: [
            {
                fontName: "Cabin Bold",
                className: "cabin-bold"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-medium",
        badFonts: [
            {
                fontName: "Cabin Medium",
                className: "cabin-medium"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-medium",
        badFonts: [
            {
                fontName: "Cabin Regular",
                className: "cabin-regular"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-medium",
        badFonts: [
            {
                fontName: "Cabin Semibold",
                className: "cabin-semibold"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-light",
        badFonts: [
            {
                fontName: "CoreSans a35",
                className: "coresansa35"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-regular",
        badFonts: [
            {
                fontName: "CoreSans a45",
                className: "coresansa45"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-bold",
        badFonts: [
            {
                fontName: "Cores ansg Medium",
                className: "coresansg-medium"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-bold",
        badFonts: [
            {
                fontName: "Crimson Bold",
                className: "crimson-bold"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-regular",
        badFonts: [
            {
                fontName: "Crimson Roman",
                className: "crimson-roman"
            }
        ]
    },
    {
        goodFontName: "alegreya-sans-regular",
        badFonts: [
            {
                fontName: "Noto Sans",
                className: "notosans"
            }
        ]
    }
];

const LK = () => {
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

export default LK;
