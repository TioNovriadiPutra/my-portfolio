import SectionHeader from "./shared/SectionHeader";

function PortfolioSection() {
  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line">
      <SectionHeader
        sectionNumber="03"
        sectionTag="SELECTED PORTFOLIO"
        title="Selected Work"
        desctiption="A selection of products, platforms, and digital experiences I have
          designed and developed."
      />
    </section>
  );
}

export default PortfolioSection;
