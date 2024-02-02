import React, { useState } from 'react';
import SplitView from './SplitView';
import FontsAccordion from './FontsAccordion';
import './style.css';

const fontsData = [
  {
    goodFontName: 'Arial',
    badFonts: ['Comic Sans MS', 'Papyrus'],
  },
  {
    goodFontName: 'Helvetica',
    badFonts: ['Times New Roman', 'Courier New'],
  },
];

const App = () => {
  const [selectedBadFont, setSelectedBadFont] = useState<string | null>(null);

  const handleBadFontSelect = (selectedFont: string) => {
    setSelectedBadFont(selectedFont);
  };

  const goodFontsData = fontsData.map((goodFont) => ({
    fontName: goodFont.goodFontName,
    samples: ['H1', 'H2', 'H3', 'H4', 'H5', 'P'],
  }));

  return (
    <SplitView
      leftContent={
        <FontsAccordion
          fontsData={fontsData.flatMap((pair) =>
            pair.badFonts.map((badFont) => ({
              fontName: badFont,
              samples: ['H1', 'H2', 'H3', 'H4', 'H5', 'P'],
            }))
          )}
          onFontSelect={handleBadFontSelect}
          isBadFont={true}
        />
      }
      rightContent={
        <FontsAccordion
          fontsData={
            selectedBadFont
              ? fontsData
                  .filter((pair) => pair.badFonts.includes(selectedBadFont))
                  .map(({ goodFontName }) => ({
                    fontName: goodFontName,
                    samples: ['H1', 'H2', 'H3', 'H4', 'H5', 'P'],
                  }))
              : []
          }
          isBadFont={false}
        />
      }
    />
  );
};

export default App;
