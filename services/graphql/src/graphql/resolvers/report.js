const reportingService = require('../../services/reporting');
const {
  advertiser,
  order,
  lineitem,
  ad,
  publisher,
  deployment,
  adunit,
} = require('../../mongoose/models');

module.exports = {
  /**
   *
   */
  ReportRow: {
    advertiser: ({ advertiserId }) => advertiser.findById(advertiserId),
    order: ({ orderId }) => order.findById(orderId),
    lineitem: ({ lineitemId }) => lineitem.findById(lineitemId),
    ad: ({ adId }) => ad.findById(adId),
    publisher: ({ publisherId }) => publisher.findById(publisherId),
    deployment: ({ deploymentId }) => deployment.findById(deploymentId),
    adunit: ({ adunitId }) => adunit.findById(adunitId),
  },

  /**
   *
   */
  Query: {
    report: (_, { input }) => reportingService(input),
  },
};
