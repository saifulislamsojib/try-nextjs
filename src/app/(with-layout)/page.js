// import image1 from "@/assets/tree-736885_1280.jpg";
// import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      <div>
        {/* <Image
          src={image1}
          height={499}
          width={800}
          // priority
          className="h-auto w-[800px]"
          placeholder="blur"
          // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAIAAzYDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APMANuoAAAAAAqAKAAAKAAAAAAAAAAAIAAAAoAAAAgAAAACIAAioAACAAIqAIqIgioAioIAAgAIAiIAIgAgACACAAAAAACooAAoqKAAKoACoqqAAoAoACgAAAAAACgANgGgAAAAAAABRFAAFAAAAAAAAAEAAAAAAUAAABAAAAABEAARUAABAAEVAEVEQRUARUEAAQAEAREAEQAQABABAAAAAAAAFAFAAUAVQAFRRQBRQBQAFEUAAAAAAAAVsA0AAAAAAAAAAKIAoAoAAAgAAAAAAAAACgACKgAAAAgioAAAgAAgACAgAIAgioAioIAgAIIAiAAIgAgioIAAAAAAAAAAoAoACgCqAAqKKAKKAKAAKigAAAAAAAA2EGlUQBRFAAAAAAAAAAFFQBRBBQAAAAAAAAAAQAAAAAAEAAABAAEAABBABEAAQAEAQRUARURBFQBFQQAEEVBAAAAAAAAAAFEUAAVQBRUUBUUUABRFUABQAFEUAAAAAAGoDSgAAAAACoAogCiKAAigAAAAAAAAAAAAAAAAAAICoAAACKgAIAAgIqAAggACAAgAggAICIIqAIqCAAiACAAAAAAAAAACooAAqiKAqKKACqAAqAKAqgAAAKAAAAADUBpQAAAAAAAABAAAABRAVRAFAAAAAAAAAAEAVAAAAAAEAAAEBAABABBAABAAQQBAAERAAQARABAEEAAAAAAAAAAAAAAUAUVFAAFUABUUUABRFAAFAAFQUURQAAaANAAAAgogKogCiKAAAAAAAAAAKKgCiAKgAAAAAAACAKgAAAICAAAgCAIAAAgAIqCCKgCKiIIqAAggAIIAgAAAAAAAAAAAAAAqKAAKoAqiKAAKoigAAoigAAACgAAANRBoUQBRAFEAUAAAAAUAAABRAFEUAAAAAAUAAEAAAAAAAEBAAAQBAEAAARUABBAAEAREAAQBBAEAQAAQAAAAAAAAAAAAAAABQBRUUBUBVAAAFURQAAUQBQAAAAAaCK0oAAAAAAAAAAACiAKIooAAAAAAAAAAAAAACAogAAgAAIAAIAAACAACCAAgICKggCAAggAIIAgAAAAAAAAAAAAAAAAAAqKAAKoigKgKoACoCqAAAAACiAKIA0AaAAAAAAVRAFEAUQBRFAAAAFAAFQBRAAAAAABAAABAUQAAAEAAAAQAAQQAEVEAEEAAQAQQBAEEAAAAAAAAAAAAAAAAAAAAAAUABUBVABRFFAAFQFUAAAAAAAHYDQAAAAogCiAKIAoAoAAAAACiAKICqIAoggogCiAAAAAAICoAAACAAAIICACAACCAAgCCKgAAiACAAAAAAAAAAAAAAAAAAAAAAKIoAAqiKgACqIoACgqAKIAoiigAOgGkAAABVEAUQBRFAAAAAAFUQQUQBRAFEAUQBRAFEAUQFABAAAEBUAAEAAQAQAAQQAAQQBEABUEAQAAAAAAAAAAAAAAAAAAAAAAAAVFAAAARVEUAAVRFAAAAAAAAB0A2AAKIAoggogooCKAAAAKgCiAKICqIoAAAAAgCiAKIAogCoAAAAgAAgCAAAggAAggAgIAgCKgAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAIqiAKAAqAqiAKAAACgNIAAKgCiAqiAKIoAAAAoqAKIAoigAAACgAAAAAAICiAKgIAAAIIqAACAqAACCACAgCAIoACAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAiioAoigAAAAAAoDSAACoCqIAogCiKAAKKgCiAKIAoAoAAAAAAAAAAAgAgKIAqAAAAIAAAAggAgIAgAogAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKAAAAAAAAAAigAKIAogCgNIAAAAogCiAKICqAAqAKICqIoACAAAAAqAqiAKgAAAAACAKgAAAACCAACIKgCACggCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAoAAAAAAAAAAAACKAAAKyAAAAogCiKKAAAAogKoigAAACgAKIAogCiAKIAogKAAACAAAIAAACAAIgAoIAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAACAAAACoCqIAoigACgAKIAoiigAAAAAAAAICiAKgAAACAgAAAAgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAoAAAoAAAAAAAKAAAAAAAgioAAAAACKggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoigAAAAAAAACAKgAAAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqIoAAAgAAAAAAAAAAAAAioIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCgIAAAAAAAAAAAAAAAiCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAooACCgIKAgoCAAAAAAAAAAIqCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgAAAAAAAAAAAAAIKgAAAAAAAAiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAgAAAAAKCgIKAigKAAAAAAAAACgAAAAACKAgAgAAAAAAioIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAgAAAAAAAKCgAAAAAAoAAAoAAAoqCgIKAgAAAAAAACKAgqIAAgAAACCoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigAAAAAAAAAAAAAACgIKAgoCCgAAAAAAoAoAoIoAIoKigAAAAAAAigIKAgqAAAAAAAgqCACAAAigiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigAAAAAAAAAAAAAAoAAAAAAAAAAqKoCgigAAAAKAAAAAAAAAAAAAAAAIoCCoAAAigIAIAIAACKCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAoCgAACioKAAAAAAAAAACgAAAAAAAAAoAAAAAAAAAIIoCAAAAIqAACACAAIgqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAOgFUAAAAAAAAAAAAAFAAAAAAAABQEFQUAAAAAAAAAAAEQAAAAAEAEAAAEBFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAdAKoAAAAAAAAAAAKAAKigIqAAAKAoAAigIKAgAAAAAAAAACKggAAAAioIAAAAIoiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAACgAjoBVAAAAAAAAABQAAAFAAABFRQABQAAAABQRRBAAAAAAAAEVAABAABFQQAAAAAREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFAAAAAAAAUAEAAUAEAAf/9k="
          alt=""
        /> */}
      </div>
    </main>
  );
};
export default HomePage;