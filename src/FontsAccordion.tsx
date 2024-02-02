import React, { useState } from 'react';

interface FontsAccordionProps {
  fontsData: {
    fontName: string;
    samples?: string[];
  }[];
  onFontSelect?: (selectedFont: string) => void;
  activeFont?: string;
  isBadFont: boolean;
}

const FontsAccordion: React.FC<FontsAccordionProps> = ({
  fontsData,
  onFontSelect = () => {},
  activeFont,
  isBadFont,
}) => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const handlePanelClick = (fontName: string) => {
    setOpenPanel(fontName);
    onFontSelect(fontName);
  };

  return (
    <div>
      {fontsData.map((font, index) => (
        <div key={index}>
          <button onClick={() => handlePanelClick(font.fontName)}>
            {font.fontName}
          </button>
          {(openPanel === font.fontName || !isBadFont) && (
            <div>
              {(font.samples || ['H1', 'H2', 'H3', 'H4', 'H5', 'P']).map(
                (tag, tagIndex) => (
                  <div key={tagIndex} style={{ fontFamily: font.fontName }}>
                    {React.createElement(
                      tag.toLowerCase(),
                      null,
                      `${tag} text in ${font.fontName}`
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FontsAccordion;
