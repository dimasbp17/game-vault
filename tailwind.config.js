import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        biru: '#39289F',
        oren: '#FA8305',
      },
      fontFamily: {
        poppins: 'Poppins, serif',
      },
    },
  },
  plugins: [],
});
