export default function MobileServiceItem({ title, desc }) {
  return (
    <div className="border-l-4 border-black pl-4">
      <h3 className="text-[#002B5C] font-bold text-xl mb-2">{title}</h3>
      <div className="bg-black p-3 inline-block rounded-br-xl">
        <p className="text-brand font-bold text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}