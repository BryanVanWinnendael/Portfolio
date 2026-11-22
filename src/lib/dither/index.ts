export {
  BAYER_2,
  BAYER_4,
  BAYER_8,
  BLUE_NOISE_64,
  DITHER_MATRICES,
  getThresholdMap,
  isInked,
  thresholdAt,
} from "./matrices";
export type { DitherMatrix, ThresholdMap } from "./matrices";

export {
  cssColor,
  DEFAULT_PALETTE,
  DITHER_COLOR_NAMES,
  DITHER_COLORS,
  MOTION,
} from "./tokens";
export type {
  DitherColor,
  DitherColorName,
  DitherPalette,
  Rgba,
} from "./tokens";

export {
  BLOOM_LEVELS,
  BLOOMS,
  bloomFilter,
  bloomLayerStyle,
  bloomStyle,
  ditherRamp,
  FILL_VARIANTS,
  fillStyle,
  fillTile,
  SERIES_COLORS,
  seriesColor,
} from "./style";
export type {
  Bloom,
  FillEdge,
  FillStyleOptions,
  FillTile,
  FillVariant,
  RampOptions,
  RampTile,
} from "./style";

export {
  readDitherCell,
  resolveColor,
  subscribeToTheme,
  useDitherColors,
} from "./color";

export {
  useDocumentVisible,
  useFrameLoop,
  useInView,
  usePrefersReducedMotion,
} from "./motion";
export type {
  FrameLoopCallback,
  FrameLoopOptions,
  FrameLoopState,
} from "./motion";

export { DitherShader, MAX_LIVE_CONTEXTS } from "./shader";
export type {
  DitherShaderProps,
  DitherShaderState,
  DitherUniforms,
  ShaderUniformValue,
} from "./shader";

export { BloomBox, BloomGroup, FillPattern } from "./fill";
export type {
  BloomBoxProps,
  BloomGroupProps,
  FillPatternProps,
  FillRamp,
} from "./fill";

export {
  DitherPattern,
  ditherMask,
  ditherMaskStyle,
  ditherPath,
} from "./pattern";
export type {
  DitherMaskOptions,
  DitherMaskStyleOptions,
  DitherPatternProps,
} from "./pattern";

export { DITHER_METHODS, ditherImage } from "./diffuse";
export type {
  DiffuseOptions,
  DiffusionMethod,
  DiffusionOptions,
  DitherMethod,
  ImagePalette,
  OrderedMethod,
  OrderedOptions,
  PaletteColor,
  PixelBuffer,
} from "./diffuse";
