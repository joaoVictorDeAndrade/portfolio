import { tv } from 'tailwind-variants';
import PropTypes from 'prop-types';

const button = tv({
  base: 'h-10 text-white font-semibold rounded-full hover:ring-2',
  variants: {
    variant: {
      primary: 'bg-white text-inherit',
      secondary: 'bg-transparent text-white border-2 border-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export function Button({ children, size, variant, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={button({ size, variant })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
