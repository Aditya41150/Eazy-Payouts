import React, { useState, useEffect } from 'react';
import { Wallet, FileText, TrendingUp, LogOut } from 'lucide-react';
import logoImg from './assets/logo.png';

// Mock API - simulating backend data
const mockAPI = {
  companies: [
    { id: 1, name: 'ABC Corporation' },
    { id: 2, name: 'XYZ Industries' },
    { id: 3, name: 'Global Tech Solutions' }
  ],
  
  accounts: {
    1: [
      { id: 101, name: 'Primary Account' },
      { id: 102, name: 'Secondary Account' },
      { id: 103, name: 'Vendor Account' }
    ],
    2: [
      { id: 201, name: 'Operations Account' },
      { id: 202, name: 'Marketing Account' }
    ],
    3: [
      { id: 301, name: 'Main Account' },
      { id: 302, name: 'Regional Account' },
      { id: 303, name: 'Development Account' }
    ]
  },
  
  accountData: {
    101: {
      balance: 9888888888,
      loads: [
        { date: '07/05/2024 01:04 PM', credit: 21337, acBalance: 21337, utr: '1000000', acNo: 'AC0CF7RRUY407QHU' },
        { date: '04/05/2024 12:38 PM', credit: 21337, acBalance: 21337, utr: 'CMS4136431811', acNo: '0104SLNEFTPL' },
        { date: '28/03/2024 05:09 PM', credit: 21337, acBalance: 21337, utr: 'CMS4019645011', acNo: 'ACT861VM9RR67Z5C' },
        { date: '28/03/2024 05:09 PM', credit: 5015.69, acBalance: 5015.69, utr: 'CMS3956666735', acNo: 'AC0CF7RRUY407QHU' },
        { date: '19/03/2024 11:33 PM', credit: 5015.69, acBalance: 5015.69, utr: 'CMS3948064984', acNo: 'ACT861VM9RR67Z5C' },
        { date: '19/03/2024 11:33 PM', credit: 16000, acBalance: 16000, utr: 'CMS3938564916', acNo: 'AC0CF7RRUY407QHU' }
      ]
    },
    102: {
      balance: 7542156789,
      loads: [
        { date: '15/05/2024 03:22 PM', credit: 45000, acBalance: 45000, utr: '2000001', acNo: 'BC1DF8SSVY508RIV' },
        { date: '12/05/2024 10:15 AM', credit: 32500, acBalance: 32500, utr: 'CMS5247542922', acNo: '0205TLNEFTPM' },
        { date: '05/04/2024 02:45 PM', credit: 18900, acBalance: 18900, utr: 'CMS5129756122', acNo: 'BCU972WN0SS78A6D' },
        { date: '02/04/2024 09:30 AM', credit: 25000, acBalance: 25000, utr: 'CMS5067777846', acNo: 'BC1DF8SSVY508RIV' }
      ]
    },
    103: {
      balance: 5234567890,
      loads: [
        { date: '20/05/2024 11:45 AM', credit: 12500, acBalance: 12500, utr: '3000002', acNo: 'CC2EG9TTWZ619SJW' },
        { date: '18/05/2024 04:20 PM', credit: 8750, acBalance: 8750, utr: 'CMS6358653033', acNo: '0306UMNEFTPN' },
        { date: '10/04/2024 01:15 PM', credit: 15000, acBalance: 15000, utr: 'CMS6240867233', acNo: 'CCW083XO1TT89B7E' }
      ]
    },
    201: {
      balance: 12345678901,
      loads: [
        { date: '22/05/2024 02:10 PM', credit: 55000, acBalance: 55000, utr: '4000003', acNo: 'DD3FH0UUXZ720TKX' },
        { date: '20/05/2024 09:50 AM', credit: 42000, acBalance: 42000, utr: 'CMS7469764144', acNo: '0407VNEFTPO' },
        { date: '15/04/2024 03:35 PM', credit: 38500, acBalance: 38500, utr: 'CMS7351978344', acNo: 'DDX194YP2UU90C8F' },
        { date: '12/04/2024 11:20 AM', credit: 29000, acBalance: 29000, utr: 'CMS7289888957', acNo: 'DD3FH0UUXZ720TKX' }
      ]
    },
    202: {
      balance: 8765432109,
      loads: [
        { date: '25/05/2024 10:30 AM', credit: 33000, acBalance: 33000, utr: '5000004', acNo: 'EE4GI1VVYA831ULY' },
        { date: '23/05/2024 01:45 PM', credit: 27500, acBalance: 27500, utr: 'CMS8570875255', acNo: '0508WONEFTPP' },
        { date: '18/04/2024 12:25 PM', credit: 22000, acBalance: 22000, utr: 'CMS8463089455', acNo: 'EEY205ZQ3VV01D9G' }
      ]
    },
    301: {
      balance: 6543210987,
      loads: [
        { date: '28/05/2024 03:15 PM', credit: 19500, acBalance: 19500, utr: '6000005', acNo: 'FF5HJ2WWZB942VMZ' },
        { date: '26/05/2024 11:00 AM', credit: 16000, acBalance: 16000, utr: 'CMS9681986366', acNo: '0609XPNEFTPQ' },
        { date: '22/04/2024 02:40 PM', credit: 13500, acBalance: 13500, utr: 'CMS9574200566', acNo: 'FFZ316AR4WW12E0H' },
        { date: '19/04/2024 09:55 AM', credit: 11000, acBalance: 11000, utr: 'CMS9512000178', acNo: 'FF5HJ2WWZB942VMZ' }
      ]
    },
    302: {
      balance: 4321098765,
      loads: [
        { date: '30/05/2024 01:20 PM', credit: 24000, acBalance: 24000, utr: '7000006', acNo: 'GG6IK3XXAC053WNA' },
        { date: '28/05/2024 10:35 AM', credit: 20500, acBalance: 20500, utr: 'CMS0793097477', acNo: '0710YQNEFTPR' },
        { date: '25/04/2024 03:50 PM', credit: 17500, acBalance: 17500, utr: 'CMS0685311677', acNo: 'GGA427BS5XX23F1I' }
      ]
    },
    303: {
      balance: 9876543210,
      loads: [
        { date: '01/06/2024 11:40 AM', credit: 48000, acBalance: 48000, utr: '8000007', acNo: 'HH7JL4YYBD164XOB' },
        { date: '30/05/2024 02:25 PM', credit: 39500, acBalance: 39500, utr: 'CMS1804108588', acNo: '0811ZRNEFTPS' },
        { date: '28/04/2024 12:10 PM', credit: 35000, acBalance: 35000, utr: 'CMS1796422788', acNo: 'HHB538CT6YY34G2J' },
        { date: '25/04/2024 09:30 AM', credit: 31000, acBalance: 31000, utr: 'CMS1734222300', acNo: 'HH7JL4YYBD164XOB' }
      ]
    }
  }
};

// API simulation functions
const fetchCompanies = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAPI.companies), 400);
  });
};

const fetchAccounts = (companyId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAPI.accounts[companyId] || []), 400);
  });
};

const fetchAccountData = (accountId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAPI.accountData[accountId] || null), 400);
  });
};

const EazyPayouts = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('loads');

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const data = await fetchCompanies();
    setCompanies(data);
  };

  const handleCompanyChange = async (e) => {
    const companyId = e.target.value;
    setSelectedCompany(companyId);
    setSelectedAccount('');
    setAccountData(null);
    
    if (companyId) {
      setLoading(true);
      const accountsData = await fetchAccounts(parseInt(companyId));
      setAccounts(accountsData);
      setLoading(false);
    } else {
      setAccounts([]);
    }
  };

  const handleAccountChange = async (e) => {
    const accountId = e.target.value;
    setSelectedAccount(accountId);
    
    if (accountId) {
      setLoading(true);
      const data = await fetchAccountData(parseInt(accountId));
      setAccountData(data);
      setLoading(false);
    } else {
      setAccountData(null);
    }
  };

  const formatCurrency = (value) => {
    return `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatBalance = (value) => {
    const crores = Math.floor(value / 10000000);
    const lakhs = Math.floor((value % 10000000) / 100000);
    const thousands = Math.floor((value % 100000) / 1000);
    const hundreds = value % 1000;
    
    return `₹ ${crores},${lakhs.toString().padStart(2, '0')},${thousands.toString().padStart(2, '0')},${hundreds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between md:justify-start md:space-x-3">
            <div className="relative flex items-center space-x-3">
              <img src={logoImg} alt="EazyPayouts" className="h-8 w-auto" />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                EazyPayouts
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          <button
            onClick={() => setActiveTab('loads')}
            className={`flex-1 md:flex-none flex items-center justify-center md:justify-start space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
              activeTab === 'loads'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Wallet className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">Loads</span>
          </button>

          <button
            onClick={() => setActiveTab('statements')}
            className={`flex-1 md:flex-none flex items-center justify-center md:justify-start space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
              activeTab === 'statements'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">Statements</span>
          </button>

          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex-1 md:flex-none flex items-center justify-center md:justify-start space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
              activeTab === 'transactions'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">Transactions</span>
          </button>
        </nav>

        {/* Logout */}
        <div className="p-3 md:p-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center md:justify-start space-x-2 px-3 py-2 md:px-4 md:py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm md:text-base">
            <LogOut className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full overflow-x-hidden">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Header with Dropdowns */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative w-full sm:w-56 md:w-64">
              <select
                value={selectedCompany}
                onChange={handleCompanyChange}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 pr-9 sm:pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Company Name</option>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative w-full sm:w-56 md:w-64">
              <select
                value={selectedAccount}
                onChange={handleAccountChange}
                disabled={!selectedCompany}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 pr-9 sm:pr-10 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Account Name</option>
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-48 sm:h-64">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : accountData ? (
            <>
              {/* Balance Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6 w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                      Avaliable Balance
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600 break-all">
                      {formatBalance(accountData.balance)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Loads Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    Latest Loads are displyed here
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Credit
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          A/c Balance
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          UTR/RRN
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          A/c No /UPI
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {accountData.loads.map((load, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                            {load.date}
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-green-600 whitespace-nowrap">
                            {formatCurrency(load.credit)}
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                            {formatCurrency(load.acBalance)}
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-mono whitespace-nowrap">
                            {load.utr}
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-mono whitespace-nowrap">
                            {load.acNo}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 sm:p-12 text-center">
              <Wallet className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                No Account Selected
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Please select a company and account to view load transactions
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EazyPayouts;
