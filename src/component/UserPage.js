import React, { useEffect, useState, useRef } from "react";
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../component/Test.css";

function UserPage(props) {
  let [tab, setTab] = useState(0);

  const params = useParams();
  let aaa = true;
  aaa = !aaa;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  let NewArray = [];

  for (let i = 0; i < props.전달값.length; i++) {
    if (props.전달값[i].userId == params.id) {
      NewArray.push(props.전달값[i]);
    }
  }

  function UserName() {
    for (let i = 0; i < props.전달값.length; i++) {
      if (props.유저값[i].id == params.id) {
        return props.유저값[i].name;
      }
    }
  }

  function TabContent(props) {
    if (props.tab === 0) {
      return (
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {NewArray.map((data, eventIdx) => (
              <li key={data.id}>
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <Link
                          to={`/user/${data.userId}/detail/${data.id}/completed/all`}
                        >
                          <a className="font-medium text-gray-900">
                            제목 : {data.title}
                          </a>
                        </Link>
                      </div>
                      <div
                        style={{
                          color: data.completed === true ? "red" : "blue",
                          fontWeight: "700",
                        }}
                      >
                        {JSON.stringify(data.completed)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (props.tab === 1) {
      return (
        <>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {NewArray.map((data, eventIdx) =>
                data.completed === false ? (
                  <li key={data.id}>
                    <div className="relative pb-8">
                      <div className="relative flex space-x-3">
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <Link
                              to={`/user/${data.userId}/detail/${data.id}/completed/${data.completed}`}
                            >
                              <a className="font-medium text-gray-900">
                                제목 : {data.title}
                              </a>
                            </Link>
                          </div>
                          <div
                            style={{
                              color: data.completed === true ? "red" : "blue",
                              fontWeight: "700",
                            }}
                          >
                            {JSON.stringify(data.completed)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </>
      );
    } else if (props.tab === 2) {
      return (
        <>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {NewArray.map((data, eventIdx) =>
                data.completed === true ? (
                  <li key={data.id}>
                    <div className="relative pb-8">
                      <div className="relative flex space-x-3">
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <Link
                              to={`/user/${data.userId}/detail/${data.id}/completed/${data.completed}`}
                            >
                              <a className="font-medium text-gray-900">
                                제목 : {data.title}
                              </a>
                            </Link>
                          </div>
                          <div
                            style={{
                              color: data.completed === true ? "red" : "blue",
                              fontWeight: "700",
                            }}
                          >
                            {JSON.stringify(data.completed)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="pb-5 border-b border-gray-200 sm:pb-0">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          유저이름은 : {UserName()}
        </h3>
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            {/* <label htmlFor="TF" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              defaultValue={TF}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option key={setTF()}>모두</option>
                <option key={setTF()}>초안</option>
                <option key={setTF()}>완료</option>
            </select> */}
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              <a
                onClick={() => {
                  setTab(0);
                }}
                className={classNames(
                  aaa
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                )}
              >
                모두
              </a>
              <a
                onClick={() => {
                  setTab(1);
                }}
                className={classNames(
                  aaa
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                )}
              >
                초안
              </a>
              <a
                onClick={() => {
                  setTab(2);
                }}
                className={classNames(
                  aaa
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                )}
              >
                완료
              </a>
            </nav>
          </div>
        </div>
      </div>
      <TabContent tab={tab} />
    </>
  );
}

export default UserPage;
