import React, { useState, useEffect } from 'react';
import { Card, CircularProgress, Box, useTheme } from '@mui/material';

export default function CustomTraderView() {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": theme.palette.mode, // Use the current theme mode
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "100%",
      "height": "660",
      "plotLineColorGrowing": theme.palette.primary.main,
      "plotLineColorFalling": theme.palette.primary.main,
      "gridLineColor": theme.palette.divider,
      "scaleFontColor": theme.palette.text.secondary,
      "belowLineFillColorGrowing": theme.palette.primary.light,
      "belowLineFillColorFalling": theme.palette.primary.light,
      "belowLineFillColorGrowingBottom": theme.palette.primary.main,
      "belowLineFillColorFallingBottom": theme.palette.primary.main,
      "symbolActiveColor": theme.palette.action.selected,
      "tabs": [
        {
          "title": "Futures",
          "symbols": [
            { "s": "CME_MINI:ES1!", "d": "S&P 500" },
            { "s": "CME:6E1!", "d": "Euro" },
            { "s": "COMEX:GC1!", "d": "Gold" },
            { "s": "NYMEX:CL1!", "d": "Oil" },
            { "s": "NYMEX:NG1!", "d": "Gas" },
            { "s": "CBOT:ZC1!", "d": "Corn" }
          ],
          "originalTitle": "Futures"
        },
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR to USD" },
            { "s": "FX:GBPUSD", "d": "GBP to USD" },
            { "s": "FX:USDJPY", "d": "USD to JPY" },
            { "s": "FX:USDCHF", "d": "USD to CHF" },
            { "s": "FX:AUDUSD", "d": "AUD to USD" },
            { "s": "FX:USDCAD", "d": "USD to CAD" }
          ],
          "originalTitle": "Forex"
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BINANCE:BTCUSDT" },
            { "s": "BINANCE:ETHUSDT" },
            { "s": "BITFINEX:XRPUSD" },
            { "s": "BINANCE:XRPUSDT.P" },
            { "s": "BITSTAMP:ETHUSD" }
          ]
        },
        {
          "title": "Stocks",
          "symbols": [
            { "s": "NASDAQ:TSLA" },
            { "s": "NASDAQ:AAPL" },
            { "s": "NASDAQ:NVDA" },
            { "s": "NASDAQ:AMZN" },
            { "s": "NASDAQ:META" },
            { "s": "NASDAQ:NFLX" }
          ]
        }
      ]
    });

    script.onload = () => {
      setIsLoading(false);
    };

    const widgetContainer = document.getElementById("tradingview-widget");
    widgetContainer.appendChild(script);

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, [theme.palette.mode]); // Add theme.palette.mode as a dependency

  return (
    <Card>
      <Box
        sx={{
          position: 'relative',
          minHeight: '660px', // Match the height of the widget
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading && (
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-30px',
              marginLeft: '-30px',
            }}
          />
        )}
        <div
          className="tradingview-widget-container"
          style={{ visibility: isLoading ? 'hidden' : 'visible', width: '100%' }}
        >
          <div id="tradingview-widget"></div>
        </div>
      </Box>
    </Card>
  );
}
