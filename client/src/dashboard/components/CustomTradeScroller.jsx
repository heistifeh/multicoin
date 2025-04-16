import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CustomTradeScroller() {
  const [isLoading, setIsLoading] = React.useState(true);
  const theme = useTheme();
  const widgetContainerRef = React.useRef(null); // Using a ref for the widget container

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        }
      ],
      "colorTheme": theme.palette.mode,
      "isTransparent": true,
      "showSymbolLogo": true,
      "locale": "en"
    });

    script.onload = () => setIsLoading(false);

    // Ensure the widgetContainerRef exists before appending the script
    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (widgetContainerRef.current) {
        // Ensure the script is a child of the container before attempting to remove it
        const existingScript = widgetContainerRef.current.querySelector('script');
        if (existingScript) {
          widgetContainerRef.current.removeChild(existingScript);
        }
      }
    };
  }, [theme.palette.mode]);

  return (
    <div>
      <div className="tradingview-widget-container" ref={widgetContainerRef}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
