import svgPaths from "./svg-gr1iehk03n";

function BrandIcons() {
  return (
    <div className="bg-black relative rounded-[395.085px] shrink-0 size-[237.051px]" data-name="Brand Icons">
      <div className="absolute inset-[27.5%_17.5%_30%_20%]" data-name="Logos">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.157 100.747">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p38193000} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
          </g>
        </svg>
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