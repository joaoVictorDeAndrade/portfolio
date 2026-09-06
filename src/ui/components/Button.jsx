import { tv } from 'tailwind-variants';
import PropTypes from 'prop-types';

const button = tv({
  base: 'inline-flex h-10 items-center justify-center rounded-full font-semibold text-white hover:ring-2',
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

export function Button({ children, download, href, onClick, size, variant }) {
  const className = button({ size, variant });

  if (href) {
    return (
      <a href={href} download={download} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  download: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
