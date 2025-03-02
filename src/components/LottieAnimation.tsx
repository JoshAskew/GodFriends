import { useRef, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HamburgerAnimation = ({ isOpen }: { isOpen: boolean }) => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (animationRef.current) {
      if (isOpen) {
        animationRef.current.playSegments([0, 100], true); // Play forward to "X"
      } else {
        animationRef.current.playSegments([100, 0], true); // Play backward to hamburger
      }
    }
  }, [isOpen]);

  return (
    <DotLottieReact
      src="https://lottie.host/b787e3eb-2653-48ea-881e-21779429a7ad/ucw7sqeIaL.lottie"
      autoplay={false}
      loop={false}
      ref={animationRef} // Using ref to access the animation instance
    />
  );
};

export default HamburgerAnimation;
