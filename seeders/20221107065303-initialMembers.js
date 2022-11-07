"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          id: 1,
          name: "정하은",
          team: "Account Development",
          position: "Account Development Manager",
          emailAddress: "heidi@ab180.co",
          profileImage: "profile1.png",
        },
        {
          id: 2,
          name: "강미선",
          team: "Account Development",
          position: "Account Development Manager",
          emailAddress: "sunny.kang@ab180.co",
          profileImage: "profile2.png",
        },
        {
          id: 3,
          name: "김여은",
          team: "Enablement",
          position: "Enablement Manager",
          emailAddress: "yeoeun@ab180.co",
          profileImage: "profile3.png",
        },
        {
          id: 4,
          name: "남성필",
          team: "All",
          position: "Chief Executive Officer",
          emailAddress: "nam@ab180.co",
          profileImage: "profile4.png",
        },
        {
          id: 5,
          name: "강다현",
          team: "Marketing",
          position: "Product Marketing Manager",
          emailAddress: "dahyun@ab180.co",
          profileImage: "profile5.png",
        },
        {
          id: 6,
          name: "이재문",
          team: "Marketing",
          position: "Marketing Team Lead",
          emailAddress: "moon@ab180.co",
          profileImage: "profile6.png",
        },
        {
          id: 7,
          name: "이민아",
          team: "Marketing",
          position: "Product Marketing Manager",
          emailAddress: "minah@ab180.co",
          profileImage: "profile7.png",
        },
        {
          id: 8,
          name: "권기현",
          team: "Account Executive",
          position: "Head of Sales",
          emailAddress: "keehyun@ab180.co",
          profileImage: "profile8.png",
        },
        {
          id: 9,
          name: "김태윤",
          team: "SOLCON",
          position: "SOLCON Team Lead",
          emailAddress: "tai@ab180.co",
          profileImage: "profile9.png",
        },
        {
          id: 10,
          name: "김효은",
          team: "Sales",
          position: "Sales Operation Manager",
          emailAddress: "hyoeun@ab180.co",
          profileImage: "profile10.png",
        },
        {
          id: 11,
          name: "전온유",
          team: "Brand Design",
          position: "Brand Designer",
          emailAddress: "onyoo@ab180.co",
          profileImage: "profile11.png",
        },
        {
          id: 12,
          name: "배준휘",
          team: "Partnership Development",
          position: "Partnership Development Manager",
          emailAddress: "june@ab180.co",
          profileImage: "profile12.png",
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
