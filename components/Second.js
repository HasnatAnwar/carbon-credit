import React from "react";

const Second = () => {
  return (
    <div className="w-full flex bg-gray-800 justify-center self-center items-center text-center py-24">
      <div className="w-5/6">
        <div className="py-4">
          <p className="text-yellow-500 text-4xl">
            Unlock the Power of Voluntary Carbon Credits (VCCs)
          </p>
        </div>
        <div className="text-gray-200 py-6">
          <div className="flex flex-row space-x-4 text-start">
            <div className="flex flex-row space-x-3">
              <div className="h-8 w-8 bg-gray-700 rounded-sm"></div>
              <div>
                <p className="text-2xl">Eco-Friendly Investment</p>
                <p className="text-lg pt-2">
                  VCCs represent measurable, verifiable emission reductions from
                  certified climate action projects.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="h-8 w-8 bg-gray-700 rounded-sm"></div>
              <div>
                <p className="text-2xl">Market Growth</p>
                <p className="text-lg pt-2">
                  The voluntary carbon market is projected to grow 15x by 2030,
                  reaching $50+ billion in value.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="h-8 w-8 bg-gray-700 rounded-sm"></div>
              <div>
                <p className="text-2xl">Tangible Impact</p>
                <p className="text-lg pt-2">
                  Each credit offsets one metric ton of carbon dioxide or
                  equivalent greenhouse gases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
