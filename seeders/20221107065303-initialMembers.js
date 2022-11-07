"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          id: 1,
          name: "Heidi Jung",
          team: "Account Development",
          position: "Account Development Manager",
          emailAddress: "heidi@ab180.co",
          profileImage: "profile1.png",
        },
        {
          id: 2,
          name: "Sunny Kang",
          team: "Account Development",
          position: "Account Development Manager",
          emailAddress: "sunny.kang@ab180.co",
          profileImage: "profile2.png",
        },
        {
          id: 3,
          name: "Yeoeun Kim",
          team: "Enablement",
          position: "Enablement Manager",
          emailAddress: "yeoeun@ab180.co",
          profileImage: "profile3.png",
        },
        {
          id: 4,
          name: "Roi Nam",
          team: "All",
          position: "Chief Executive Officer",
          emailAddress: "nam@ab180.co",
          profileImage: "profile4.png",
        },
        {
          id: 5,
          name: "Dana Kang",
          team: "Marketing",
          position: "Product Marketing Manager",
          emailAddress: "dahyun@ab180.co",
          profileImage: "profile5.png",
        },
        {
          id: 6,
          name: "Jaemoon Lee",
          team: "Marketing",
          position: "Marketing Team Lead",
          emailAddress: "moon@ab180.co",
          profileImage: "profile6.png",
        },
        {
          id: 7,
          name: "Minah Lee",
          team: "Marketing",
          position: "Product Marketing Manager",
          emailAddress: "minah@ab180.co",
          profileImage: "profile7.png",
        },
        {
          id: 8,
          name: "Keehyun Kwon",
          team: "Account Executive",
          position: "Head of Sales",
          emailAddress: "keehyun@ab180.co",
          profileImage: "profile8.png",
        },
        {
          id: 9,
          name: "Tai Kim",
          team: "SOLCON",
          position: "SOLCON Team Lead",
          emailAddress: "tai@ab180.co",
          profileImage: "profile9.png",
        },
        {
          id: 10,
          name: "Hyoeun Kim",
          team: "Sales",
          position: "Sales Operation Manager",
          emailAddress: "hyoeun@ab180.co",
          profileImage: "profile10.png",
        },
        {
          id: 11,
          name: "Onyoo Jeon",
          team: "Brand Design",
          position: "Brand Designer",
          emailAddress: "onyoo@ab180.co",
          profileImage: "profile11.png",
        },
        {
          id: 12,
          name: "June Bae",
          team: "Partnership Development",
          position: "Partnership Development Manager",
          emailAddress: "june@ab180.co",
          profileImage: "profile12.png",
        },
        {
          id: 13,
          name: "Mu Song",
          team: "Product Design",
          position: "Product Writer",
          emailAddress: "jusang@ab180.co",
          profileImage: "profile13.png",
        },
        {
          id: 14,
          name: "Sojeen Park",
          team: "Customer Success 2",
          position: "Customer Success 2 Team Lead",
          emailAddress: "sojeen@ab180.co",
          profileImage: "profile14.png",
        },
        {
          id: 15,
          name: "Hojin Yoo",
          team: "Globalization",
          position: "Translator",
          emailAddress: "hojin@ab180.co",
          profileImage: "profile15.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Members", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
