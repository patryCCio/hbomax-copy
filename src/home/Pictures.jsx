import { useState } from "react";

const Pictures = ({ actualNumber, setActualNumber, maxNumber }) => {
  const names = [
    "Największe hity tego roku",
    "Wybierz roczną subskrypcję i nie przegap ani chwili",
    "Hity pełne adrenaliny",
    "Animowane przygody dla wszystkich",
    "Nie przestaniesz się śmiać",
    "Wielkie tragedie",
    "Odyseje nie z tego świata",
    "Odważ się obejrzeć",
    "Historie z życia wzięte",
  ];

  const pictures = [
    [
      "https://hbomax-images.warnermediacdn.com/images/GXpdzNQG7zbAdWQEAAAaL/tileburnedin?size=640x360&partner=hbomaxcom&v=fb9d19537199d185b92eea32ecf9ae66&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYyofRQHeuJ6fiQEAAAEy/tileburnedin?size=640x360&partner=hbomaxcom&v=ac46ba5b8f4de7b0ea297cf8e736e858&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYLD3_ArixL1sggEAAAHk/tileburnedin?size=640x360&partner=hbomaxcom&v=16a21f6b51b4f2fe813eca0a5e863c72&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GWukCJAq-nIuHwwEAAAB4/tileburnedin?size=640x360&partner=hbomaxcom&v=35581d4075702186282AgainModified&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYsYeoAxKH8LCwgEAAAOR/tileburnedin?size=640x360&partner=hbomaxcom&v=2911653aead080eac0db3c3cef4d154f&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY8_fXw8fJ8LCwgEAAAxD/tileburnedin?size=640x360&partner=hbomaxcom&v=534abe5cf9c2edf89a57135a5f4c7c7b&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYY7NkAImuJzDwgEAAAAL/tileburnedin?size=640x360&partner=hbomaxcom&v=1fef32bdd569f3b5f93cd64634a529fb&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYuwmqAnwQZa8kAEAAAE-/tileburnedin?size=640x360&partner=hbomaxcom&v=e1fd490a1eec1adc547cd267e6a1d4e8&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY2N_XAeF-cPCwwEAAAC_/tileburnedin?size=640x360&partner=hbomaxcom&v=9c2ba2b2b2641aa48182e92ea62ed3a6&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXSySggmEBE6olAEAAAJs/tileburnedin?size=640x360&partner=hbomaxcom&v=40e654e6b0630bde4f3427197846d6d9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],
    [
      "https://hbomax-images.warnermediacdn.com/2022-12/TLOU_640x360_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=640",
      "https://hbomax-images.warnermediacdn.com/2022-12/AndJustLikeThat_640x360_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=640",
      "https://hbomax-images.warnermediacdn.com/2022-12/TheGildedAge_640x360_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=640",
      "https://hbomax-images.warnermediacdn.com/2022-12/Succession_640x360_1.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=640",
    ],
    [
      "https://hbomax-images.warnermediacdn.com/images/GXSySggmEBE6olAEAAAJs/tileburnedin?size=640x360&partner=hbomaxcom&v=40e654e6b0630bde4f3427197846d6d9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYbiL3gvqXgqEhgEAAAHG/tileburnedin?size=640x360&partner=hbomaxcom&v=39b577996bd183e053c7063bfe7db3f4&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY8sbnweX35SgigEAAAxd/tileburnedin?size=640x360&partner=hbomaxcom&v=a2e5581ad6c32941e8259e0f29c60a2c&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYSeIsQemAp5NpgEAAAAM/tileburnedin?size=640x360&partner=hbomaxcom&v=3e0345ce803f50f1ca1fe76d7260f730&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY79avAWjfZfDVQEAAArt/tileburnedin?size=640x360&partner=hbomaxcom&v=0ccbdfdf058453e085d4fe1729392889&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXpdzNQG7zbAdWQEAAAaL/tileburnedin?size=640x360&partner=hbomaxcom&v=fb9d19537199d185b92eea32ecf9ae66&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYiDbSAmIpMNvYAEAAAAI/tileburnedin?size=640x360&partner=hbomaxcom&v=fd64f8006c8d862fc2a5e14d2c146ffa&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYb0FKQLsGIyPfQEAAAAM/tileburnedin?size=640x360&partner=hbomaxcom&v=e8297d53398f5d8fc6e821e50bce8776&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYij31wBohZA3MQEAAAKa/tileburnedin?size=640x360&partner=hbomaxcom&v=fc059c65159c6a42418117538b0d2bc2&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYrNiQQwpWMLDwwEAAADJ/tileburnedin?size=640x360&partner=hbomaxcom&v=b6510bd2a9e02a1e345c5e7ffcdaa3d7&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],
    [
      "https://hbomax-images.warnermediacdn.com/images/GY2N_XAeF-cPCwwEAAAC_/tileburnedin?size=640x360&partner=hbomaxcom&v=9c2ba2b2b2641aa48182e92ea62ed3a6&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=640x360&partner=hbomaxcom&v=9066a4b1774a14799596582121109312&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY5tqbgv7D0G9tAEAAAbV/tileburnedin?size=640x360&partner=hbomaxcom&v=70f651dc8d8e13caf16dcad98684d047&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYw48owR8pBbDwwEAAAh0/tileburnedin?size=640x360&partner=hbomaxcom&v=355c34a6c5e2294c28e36975f240edd9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXJvhMwgOy6gjKgEAAAGv/tileburnedin?size=640x360&partner=hbomaxcom&v=6fc6f667923acb5ec95963accc5dee4f&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYWkQ9QyS8TO6UQEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=b5eb388ac0957e7e7012359dee9a06e8&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXtk_SAmm38PCwgEAAATl/tileburnedin?size=640x360&partner=hbomaxcom&v=bdaeaf54cc92e823ca927eb0099a9729&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYOSUnARCGWWmcAEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=8968cbf22c6e2a813eda09c8e7a2f14c&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY01EcA0KsZC_wwEAAAF8/tileburnedin?size=640x360&partner=hbomaxcom&v=ce308cd73c89f9b84d54adeeec3c4b08&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXkyElw3j2J4_wwEAAAQa/tileburnedin?size=640x360&partner=hbomaxcom&v=20fb7c80fcec95d722124e2cf0af0771&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],
    [
      "https://hbomax-images.warnermediacdn.com/images/GYroFsgQ-16GyTAEAAACn/tileburnedin?size=640x360&partner=hbomaxcom&v=30036a54a49da265a5d67aa17cd0712c&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY2N_XAeF-cPCwwEAAAC_/tileburnedin?size=640x360&partner=hbomaxcom&v=9c2ba2b2b2641aa48182e92ea62ed3a6&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYGhFzgNeM8PDcgEAAAAJ/tileburnedin?size=640x360&partner=hbomaxcom&v=5ee03d57ddf82a16cdd15679773358c4&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYnXC6AfPOsPCwgEAAAAb/tileburnedin?size=640x360&partner=hbomaxcom&v=b201d607ae78e209ff31db4aa1265652&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXdRsewUPO5uAuwEAABEI/tileburnedin?size=640x360&partner=hbomaxcom&v=26a5badd79c2cca91aa0c86d604bfd3e&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYXBzKw3n5aJmOwEAAAAE/tileburnedin?size=640x360&partner=hbomaxcom&v=38ad1c9f877719e9c5a99d1927035aea&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=640x360&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXyL-rA27qcJ6pQEAAADP/tileburnedin?size=640x360&partner=hbomaxcom&v=fb074092091bdd1dbd1b37ab86320cda&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYIBToQrPdotpNQEAAAEa/tileburnedin?size=640x360&partner=hbomaxcom&v=f58e3873b386e320805fbeeda0e811c2&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYyxh0QYubKgeRAEAAADl/tileburnedin?size=640x360&partner=hbomaxcom&v=7ff88178fbdc815302a2a116943d6b9d&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],

    [
      "https://hbomax-images.warnermediacdn.com/images/GYSeIsQemAp5NpgEAAAAM/tileburnedin?size=640x360&partner=hbomaxcom&v=3e0345ce803f50f1ca1fe76d7260f730&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYYP71Q6z9pfCHQEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=b38fe7b9fcf05f545dbf7b6069cb40c9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYXB0OgEQO5OhegEAAAAl/tileburnedin?size=640x360&partner=hbomaxcom&v=2c4b844dd5efb7237656574a8367edb6&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GWukCJAq-nIuHwwEAAAB4/tileburnedin?size=640x360&partner=hbomaxcom&v=35581d4075702186282AgainModified&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYzrqHgFIqsM2ewEAAAD4/tileburnedin?size=640x360&partner=hbomaxcom&v=8431a4d2ebb81b80637bbec2578c0db9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYT4Euwsme8NtwgEAAABI/tileburnedin?size=640x360&partner=hbomaxcom&v=4ad8fd1f3a336556c6b4f5c073e71c44&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYqhvqAAQVqXCQAEAAAAR/tileburnedin?size=640x360&partner=hbomaxcom&v=fcedad5943964b3fbaccdbf48db85623&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYk93MwWuH4BJoAEAAABu/tileburnedin?size=640x360&partner=hbomaxcom&v=e6363fd991dca3460b3b7fffcd2786f3&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYuwmqAnwQZa8kAEAAAE-/tileburnedin?size=640x360&partner=hbomaxcom&v=e1fd490a1eec1adc547cd267e6a1d4e8&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXKN_xQX5csPDwwEAAABj/tileburnedin?size=640x360&partner=hbomaxcom&v=827f7ec9e5d53d1e08950a19abfa6afb&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],

    [
      "https://hbomax-images.warnermediacdn.com/images/GY8FYyAAPRcPDwgEAAAqu/tileburnedin?size=640x360&partner=hbomaxcom&v=9256a205646cbf37d183480e0d377ab2&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYY7NkAImuJzDwgEAAAAL/tileburnedin?size=640x360&partner=hbomaxcom&v=1fef32bdd569f3b5f93cd64634a529fb&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYsYeoAxKH8LCwgEAAAOR/tileburnedin?size=640x360&partner=hbomaxcom&v=2911653aead080eac0db3c3cef4d154f&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYrMgSgrVpJbCMgEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=a04deb782903288aa08098d1faaa26cb&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYFEzmwNES16GkQEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=4190de60e6802d245ed1ea9eb1a409f3&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYC_OsgovbZbDwwEAAAAD/tileburnedin?size=640x360&partner=hbomaxcom&v=a7760d6d0bc1adc394cbd48bac212c74&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYij31wBohZA3MQEAAAKa/tileburnedin?size=640x360&partner=hbomaxcom&v=fc059c65159c6a42418117538b0d2bc2&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYzcHIw5407mRsAEAAAA4/tileburnedin?size=640x360&partner=hbomaxcom&v=568934645d8884d332705e9c1bebf9d0&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GVU2cggagzYNJjhsJATwo/tileburnedin?size=640x360&partner=hbomaxcom&v=1663a9fd5b52ee3ed81fa284122cebc9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYUjdLgBiJp5otAEAAAAJ/tileburnedin?size=640x360&partner=hbomaxcom&v=24044fcaa1cdf37ca27de78615c6d505&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],

    [
      "https://hbomax-images.warnermediacdn.com/images/GWtYeDAHJjLLCwwEAAAEw/tileburnedin?size=640x360&partner=hbomaxcom&v=a0ffcc9e70754ee4534a6b727937e7a5&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GX4h8rwVrhsPCwwEAAAIl/tileburnedin?size=640x360&partner=hbomaxcom&v=190f18e8a5c8c612364a64e833a77060&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYOYX9gphVFOLNgEAAAQR/tileburnedin?size=640x360&partner=hbomaxcom&v=892d4950643ab22e60920a4308d4f5b9&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYTEv9wrztomxJgEAAAFB/tileburnedin?size=640x360&partner=hbomaxcom&v=13374694a67207648c3bcbcbef90dbf5&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYSaKIQwrHruinAEAAABN/tileburnedin?size=640x360&partner=hbomaxcom&v=c3efa2d725de868bf6824e74fc2ccd54&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYGT8zAx-rsLDcwEAAAAs/tileburnedin?size=640x360&partner=hbomaxcom&v=8bc7f628ceda42bb833e47ddce44dadc&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GXdcPuwAQoMPCwwEAACou/tileburnedin?size=640x360&partner=hbomaxcom&v=25b4c1f0ecf12200f3ee5f06d10a2594&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYC_OsgovbZbDwwEAAAAD/tileburnedin?size=640x360&partner=hbomaxcom&v=a7760d6d0bc1adc394cbd48bac212c74&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYA79hQZbUsI3gQEAAAB0/tileburnedin?size=640x360&partner=hbomaxcom&v=a390c6a448c07b4f03797e8cf53ad289&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYH8W5wtYpsPDwgEAAAAC/tileburnedin?size=640x360&partner=hbomaxcom&v=1e6e66116743d019c094bc4e7c1576a1&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],

    [
      "https://hbomax-images.warnermediacdn.com/images/GY8FYqAfS1pfDVQEAAAss/tileburnedin?size=640x360&partner=hbomaxcom&v=3b2f6148f6805cfd8e52670d58d86b24&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY3f-0gm-acPCLwEAAAEf/tileburnedin?size=640x360&partner=hbomaxcom&v=7a9054ff67f02aa3bd72076bbdcd63f6&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GY-OQWArG-bDCLQEAAAEt/tileburnedin?size=640x360&partner=hbomaxcom&v=1add0acd1da9af0d7f5fc6fa5aaebf19&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYx_o3QgNp1iCmwEAAA3f/tileburnedin?size=640x360&partner=hbomaxcom&v=447b165fc22ce518201b6ff5a90f4f7b&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYx_owQ7sIZvDwwEAAAEp/tileburnedin?size=640x360&partner=hbomaxcom&v=f25b2e84a9d61eacf86a761dd4980a35&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYPWYoQdzIsMloQEAAAEC/tileburnedin?size=640x360&partner=hbomaxcom&v=880e533b697e0c31d2b40054e0b5c93d&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYhfHhAh4-XVowwEAAAAG/tileburnedin?size=640x360&partner=hbomaxcom&v=18b5d0be7eb775d811f9916c794747e4&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GVU2_3QlhmYNJjhsJAWUZ/tileburnedin?size=640x360&partner=hbomaxcom&v=4169f66ae186a252966598af58d42c2e&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYmFp9ATv1JSBmwEAAACW/tileburnedin?size=640x360&partner=hbomaxcom&v=752aa56fb90517d836ca21a5a811e27d&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
      "https://hbomax-images.warnermediacdn.com/images/GYDk9Ig48c5i6hgEAAAA7/tileburnedin?size=640x360&partner=hbomaxcom&v=50990acdd867e4f12abc1c167845ce94&host=art-gallery.api.hbo.com&language=pl-pl&w=320",
    ],
  ];

  return (
    <section className="section pictures">
      <div className="text-center">
        {names.map((el, index) => {
          if (index === actualNumber) {
            return <h3>{el}</h3>;
          }
        })}
      </div>
      <div className="picture-wrapper">
        {pictures.map((el, index) => {
          console.log(maxNumber);
          if (index === actualNumber) {
            return el.map((picture, indexOfPicture) => {
              if (indexOfPicture < maxNumber) {
                return (
                  <div className="picture" key={indexOfPicture}>
                    <img src={picture}></img>
                  </div>
                );
              }
            });
          }
        })}
      </div>
    </section>
  );
};

export default Pictures;
