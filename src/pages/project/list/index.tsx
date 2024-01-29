import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Input, List, Typography } from 'antd';
import type { CardItemType } from './data.d';
import useStyles from './style.style';

const { Paragraph } = Typography;

const data: Partial<CardItemType>[] = [
  {},
  {
    id: 1,
    title: '贷后管理项目',
    description:
      '贷后管理项目是指银行在贷款发放后对借款人的还款情况进行跟踪监管和风险管理的一项工作。这个项目包括对借款人还款情况的定期审查、风险评估和控制，以确保借款人按时归还贷款并降低贷款违约风险。',
  },
  {
    id: 2,
    title: '业绩认定项目',
  },
];

const ProjectList: React.FC = () => {
  const { styles } = useStyles();
  const content = (
    <div className={styles.search}>
      <Input className={styles.searchInput} prefix={<SearchOutlined />} />
      <Button className={styles.newButton} type="primary">
        <PlusOutlined />
        新建项目
      </Button>
    </div>
  );
  return (
    <PageContainer content={content}>
      <List<Partial<CardItemType>>
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => {
          if (item && item.id) {
            return (
              <List.Item key={item.id}>
                <Card hoverable className={styles.card}>
                  <Card.Meta
                    title={<a>{item.title}</a>}
                    description={
                      <Paragraph
                        ellipsis={{
                          rows: 3,
                        }}
                      >
                        {item.description}
                      </Paragraph>
                    }
                  />
                </Card>
              </List.Item>
            );
          }
          return (
            <List.Item>
              <Button type="dashed" className={styles.newCard}>
                <PlusOutlined /> 新增产品
              </Button>
            </List.Item>
          );
        }}
      />
    </PageContainer>
  );
};

export default ProjectList;
