import svgPaths from "./svg-yidlk3pbw5";

function Group() {
  return (
    <div className="absolute inset-[12.5%_0_12.14%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.452 93.7914">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p44f5e80} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function BrandIcons() {
  return (
    <div className="bg-[#000d42] relative rounded-[395.085px] shrink-0 size-[237.051px]" data-name="Brand Icons">
      <div className="absolute bottom-[22.5%] left-1/4 right-[22.5%] top-1/4" data-name="Logo / Logo / Gap Classic / White">
        <Group />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <BrandIcons />
    </div>
  );
}